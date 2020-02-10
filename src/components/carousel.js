import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class CarouselComponent extends React.Component {
  render() {
    return (
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.props.pic1}
            alt={this.props.alt1}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.props.pic2}
            alt={this.props.alt2}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.props.pic3}
            alt={this.props.alt3}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.props.pic4}
            alt={this.props.alt4}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={this.props.pic5}
            alt={this.props.alt5}
          />
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default CarouselComponent;