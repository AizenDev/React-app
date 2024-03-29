import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeSlider from './Home_slider';
import HomePromotion from './Home_promotion';
import CardBlock from '../utils/card_block';

import { getProductsByArrival, getProductsBySell } from '../../actions/products_actions';

class Home extends Component {

  componentDidMount(){
    this.props.dispatch(getProductsBySell());
    this.props.dispatch(getProductsByArrival());
  }




  render() {
    return (
      <div>
        <HomeSlider />
          <CardBlock 
            list={this.props.products.bySell} 
            title="Best selling guitars"
          />
        <HomePromotion />


        <CardBlock 
            list={this.props.products.byArrival} 
            title="New arrivals"
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(Home);