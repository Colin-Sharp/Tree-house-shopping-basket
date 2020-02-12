import React from 'react';
import CarouselComponent from '../components/carousel';
import tree1 from '../images/tree1.png';
import tree2 from '../images/tree2.png';
import tree3 from '../images/tree3.png';
import tree4 from '../images/tree4.png';
import tree5 from '../images/tree5.png';
import build1 from '../images/build1.png';
import build2 from '../images/build2.png';
import build3 from '../images/build3.png';
import build4 from '../images/build4.png';
import build5 from '../images/build5.png';


const Home = () => {
  return (
    <div style={{ maxWidth: "90%", margin: "10px 5%", textAlign: "center" }}>
      <h1>Magical Tree Houses</h1>
      <hr />
      <section>
        <p>Your dream tree house, made with recycled materials to create a magical place.
          Here a Dream Tree we beleve that haveing a place that you can go and let you
          imagination run free is so important. In the times that we are living in where
          imagination is more import then knowledge.
        </p>
      </section>
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
      <section>
        <p>
          We have a unique setup that makes it easy to put up and take down. Also ensures no
          damage to the tree. The best way is to be close to nature with out harming it. That's
          why we alway take the most care when putting up and taking down tree houses.
        </p>
      </section>
      <hr />
      <CarouselComponent className="carousel"
        pic1={build1}
        alt1="building a tree house"
        pic2={build2}
        alt2="building a tree house"
        pic3={build3}
        alt3="building a tree house"
        pic4={build4}
        alt4="building a tree house"
        pic5={build5}
        alt5="building a tree house"
      />
      <hr />
        <p>
          We are dedicated to making your dream place that you can enjoy with your family.
        </p>
      <hr />
    </div>

  )
};

export default Home;