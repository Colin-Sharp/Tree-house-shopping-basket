import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToBasket } from '../actions'

 class TreeHouses extends Component{
  handleClick = (id)=>{
    this.props.addToBasket(id); 
  }
  render(){
    let itemList = this.props.items.map(item=>{
      return(
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.title}/>
            <span className="card-title">{item.title}</span>
            <span to="/" onClick={()=>{this.handleClick(item.id)}}><i className="fas fa-plus-circle"></i></span>
          </div>
          <div className="card-content">
            <p>{item.desc}</p>
            <p><b>Price: £{item.price}</b></p>
          </div>
        </div>
      )
    })
    return(
      <div className="container">
        <h3 className="center">Our Tree houses</h3>
        <div className="box">
          {itemList}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}
const mapDispatchToProps= (dispatch)=>{
  return{
    addToBasket: (id)=>{dispatch(addToBasket(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TreeHouses)