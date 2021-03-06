import React, { Component } from 'react'
import { connect } from 'react-redux'
class Recipe extends Component {

  componentWillUnmount() {
    if (this.refs.shipping.checked)
      this.props.substractShipping()
  }

  handleChecked = (e) => {
    if (e.target.checked) {
      this.props.addShipping();
    }
    else {
      this.props.substractShipping();
    }
  }

  render() {

    return (
      <div className="container">
        <div >
          <div className="collection-item">
            <label>
              <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
              <span><p>Shipping(+£30)</p></span>
            </label>
          </div>
          <div className="collection-item"><p>Total: £ {this.props.total}</p></div>
        </div>
        <div >
          <button className="btn btn-success">Checkout</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }) },
    substractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)