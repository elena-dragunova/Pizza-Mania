import React from 'react'
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';
import './Filter.css'

class Filter extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderCategories() {
    return this.props.categories.map((category) => {
      return (
        <div className="ui checkbox filter-item" key={ category.title }>
          <input type="checkbox" name={ category.title } />
          <label>{ category.title }</label>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h4>Filter by Category</h4>
        <div className="filter">
          { this.renderCategories() }
        </div>
      </div>
    )
  }
}

const getCategories = (products) => {
  const categoriesTitles = _.uniq(products.map((product) => {
    return product.category;
  }));

  const categories = [];

  categoriesTitles.forEach((category) => {
    const productOfCategory = products.find((product) => {
      return product.category === category;
    });

    const image = productOfCategory.image;

    categories.push( {
      title: category,
      image,
    })
  });

  return categories;
};

const mapStateToProps = (state) => {
  return {
    categories: getCategories(state.products)
  }
};

export default connect(mapStateToProps, {
  fetchProducts,
})(Filter);
