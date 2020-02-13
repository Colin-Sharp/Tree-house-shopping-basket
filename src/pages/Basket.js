import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from '../actions'
import CarouselComponent from '../components/carousel'
import Recipe from './Recipe'

import tree1 from '../images/tree1.png';
import tree2 from '../images/tree2.png';
import tree3 from '../images/tree3.png';
import tree4 from '../images/tree4.png';
import tree5 from '../images/tree5.png';

class Basket extends Component {

  handleRemove = (id) => {
    this.props.removeItem(id);
  }
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  }
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  }
  render() {

    let addedItems = this.props.items.length ?
      (
        this.props.items.map(item => {
          return (
            <div  key={item.id} className="card basket">
              <div >
              <div className="card-img">
                <img src={item.img} alt={item.img} className="" />
              </div>
              <div className="item-desc">
                <span className="title">{item.title}</span>
                <p>{item.desc}</p>
              </div>
                <p><b>Price: £{item.price}</b></p>
                <p>
                  <b>Quantity: {item.quantity}</b>
                </p>
                <div className="add-remove">
                  <Link to="/basket"><i className="fas fa-arrow-up" onClick={() => { this.handleAddQuantity(item.id) }}></i></Link>
                  <Link to="/basket"><i className="fas fa-arrow-down" onClick={() => { this.handleSubtractQuantity(item.id) }}></i></Link>
                </div>
                <button className="btn btn-danger" onClick={() => { this.handleRemove(item.id) }}>Remove</button>
              </div>
            </div>
          )
        })
      ) :

      (
        <p className="nothing-order">You haven't ordered anything.</p>
      )
    return (
      <div className="container">
        <div className="cart">
          <h1>You have ordered:</h1>
          <ul className="collection">
            {addedItems}
          </ul>
        </div>
        <Recipe />
        <hr />
        <CarouselComponent className="carousel"
      pic1={tree1}
      alt1="tree house"
      pic2={tree2}  
      alt2="tree house"
      pic3={tree3}  
      alt3="tree house"
      pic4={tree4}  
      alt4="tree house"
      pic5={tree5}  
      alt5="tree house"
      />
      <hr />
       <div className="space" ></div>
       
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => { dispatch(removeItem(id)) },
    addQuantity: (id) => { dispatch(addQuantity(id)) },
    subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Basket)