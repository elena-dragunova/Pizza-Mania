import React from 'react'
import { connect } from 'react-redux';
import './Home.css'
import { fetchProducts } from '../../actions';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderPromo() {
    return this.props.promoProducts.map((product) => {
      return (
        <div key={product.id}>
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
    products: state.products,
    promoProducts: state.products.filter((product) => {
      return product.promo === true;
    })
  }
};

export default connect(mapStateToProps, {
  fetchProducts,
})(Home);
