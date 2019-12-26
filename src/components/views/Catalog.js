import React from 'react'
import { connect } from 'react-redux';
import './Catalog.css'
import Filter from '../Filter';
import { fetchProducts } from '../../actions';
import _ from 'lodash';

class Catalog extends React.Component {
   componentDidMount() {
    this.props.fetchProducts();
  }

  renderProducts() {
    return this.props.products.map((product) => {
      return (
        <div className="card catalog-item" key={ product.id }>
          <div className="image">
            <img src={ product.image } alt={ product.title }/>
          </div>
          <div className="content">
            <div className="header">
              { product.title }
            </div>
            <div className="catalog-item-info">
              <div className="description">
                { product.description }
              </div>
              <div className="catalog-item-price">
                { product.price } $
              </div>
            </div>

          </div>
          <div className="extra content">
            <button className="ui button orange">Buy</button>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="catalog-page">
        <div className="filter">
          <Filter categories={this.props.categories}/>
        </div>
        <div className="products ui cards">
          { this.renderProducts() }
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
    products: state.products,
    categories: getCategories(state.products)
  }
};

export default connect(mapStateToProps, {
  fetchProducts,
})(Catalog);

