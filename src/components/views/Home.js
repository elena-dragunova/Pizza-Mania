import React from 'react'
import { connect } from 'react-redux';
import _ from 'lodash'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Home.css'
import { fetchProducts } from '../../actions';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderPromo() {
    return this.props.promoProducts.map((product) => {
      return (
        <div key={ product.id }>
          <img src={ product.image } alt={ product.title }/>
          <div className="legend">
            <h4>{ product.title }</h4>
            <p>{ product.description }</p>
          </div>
        </div>
      )
    })
  }

  renderPromoText() {
    return (
      <div className="promoText">
        <h2>More About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.</p>
      </div>
    )
  }

  renderCategories() {
    return this.props.categories.map((category) => {
      return (
        <div className="category-item">
          <div className="category-image-wrapper">
            <img src={ category.image } alt={ category.title }/>
          </div>
          <div className="overlay">
            <h4 className="category-title">{ category.title }</h4>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="home">
        <h1>Welcome to PizzaMania!</h1>
        <Carousel showThumbs={false}
                  infiniteLoop={true}
                  autoPlay={false}>
          { this.renderPromo() }
        </Carousel>
        { this.renderPromoText() }
        <h2>Our Categories</h2>
        <div className="categories">
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
    products: state.products,
    promoProducts: state.products.filter((product) => {
      return product.promo === true;
    }),
    categories: getCategories(state.products)
  }
};

export default connect(mapStateToProps, {
  fetchProducts,
})(Home);
