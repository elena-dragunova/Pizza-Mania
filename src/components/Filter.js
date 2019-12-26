import React from 'react'
import { connect } from 'react-redux';
import './Filter.css'
import { filterProducts } from '../actions';

class Filter extends React.Component {
  handleChange (e) {
    e.persist();
    const checkboxes = document.querySelectorAll('.category-checkbox');
    const categories = [];
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        categories.push(checkbox.name);
      }
    });
  };

  renderCategories() {
    return this.props.categories.map((category) => {
      return (
        <div className="ui checkbox filter-item" key={ category.title }>
          <input type="checkbox"
                 name={ category.title }
                 className="category-checkbox"
                 onChange={(e) => this.handleChange(e)} />
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

export default connect(null, {
  filterProducts,
})(Filter);
