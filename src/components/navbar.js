import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(porps) {
    super(porps)
    this.state = {
      sideBarOpen: true
    }
  }
  handleToggle() {
    this.setState({ sideBarOpen: !this.state.sideBarOpen })
  }
  render() {
    const { sideBarOpen } = this.state
    return (
      <div>
        <div id="backdrop" className={`${sideBarOpen ? "" : "open"}`} onClick={e => this.handleToggle()} />
        <div className="basket" >
          <Link to="basket"><i className="fas fa-shopping-basket"></i></Link>
        </div>
        <div className="toggle-button" onClick={e => this.handleToggle()}>
          <i id="toggleBtn" className="fas fa-bars"></i>
        </div>
        <nav className={`${sideBarOpen ? "" : "open"}`} id="side-bar">
          <ul>
            <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
            <Link to="/tree-houses" style={{ textDecoration: 'none' }}>Tree Houses</Link>
            <Link to="/basket" style={{ textDecoration: 'none' }}>Basket</Link>
          </ul>
        </nav>
        <nav id="header" >
          <Link id="logo" to="/">DreamTree</Link>
          <div className="toggle-button" onClick={e => this.handleToggle()}>
            <i id="toggleBtn" className="fas fa-bars"></i>
          </div>
          <div className="nav-bar">
          <ul >
              <li >
                <Link  to="/">Home</Link>
              </li>
              <li >
                <Link  to="/tree-houses">Tree Houses</Link>
              </li>
              <li >
                <Link  to="/basket">Basket</Link>
              </li>
            </ul>
          </div>
           
        </nav>
      </div>

    )
  }
}
export default Navbar;

