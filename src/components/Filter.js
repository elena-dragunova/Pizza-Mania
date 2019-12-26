import React from 'react'
import './Filter.css'

class Filter extends React.Component {
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

export default Filter;
