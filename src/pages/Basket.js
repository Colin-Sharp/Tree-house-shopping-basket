import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, addQuantity, subtractQuantity } from "../actions";
import Recipe from "./Recipe";


class Basket extends Component {
  handleRemove = id => {
    this.props.removeItem(id);
  };
  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <div key={item.id} className="card basket">
            <div>
              <div className="card-img">
                <img src={item.img} alt={item.img} className="" />
              </div>
              <div className="item-desc">
                <span className="title">{item.title}</span>
                <p>{item.desc}</p>
              </div>
              <p>
                <b>Price: £{item.price}</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className="add-remove">
                <Link to="/basket">
                  <i
                    className="fas fa-arrow-up"
                    onClick={() => {
                      this.handleAddQuantity(item.id);
                    }}
                  ></i>
                </Link>
                <Link to="/basket">
                  <i
                    className="fas fa-arrow-down"
                    onClick={() => {
                      this.handleSubtractQuantity(item.id);
                    }}
                  ></i>
                </Link>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => {
                  this.handleRemove(item.id);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })
    ) : (
      <p className="nothing-order">You haven't ordered anything.</p>
    );
    return (
      <div className="container">
        <div className="cart">
          <h1 style={{padding: '100px 0 30px'}}>You have ordered:</h1>
          <ul className="collection">{addedItems}</ul>
        </div>
        <Recipe />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Basket);
