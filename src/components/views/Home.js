import React from 'react'
import { connect } from 'react-redux';
import './Home.css'
import { fetchProducts } from '../../actions';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderPromo() {
    return this.props.products.map((product) => {
      return (
        <div>
          <h4>{ product.title }</h4>
          <p>{ product.description }</p>
          <img src={ product.image } alt={product.title}/>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        { this.renderPromo() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.products)
  }
};

export default connect(mapStateToProps, {
  fetchProducts,
})(Home);
