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
              <span>Shipping(+£30)</span>
            </label>
          </div>
          <div className="collection-item"><b>Total: £ {this.props.total} </b></div>
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