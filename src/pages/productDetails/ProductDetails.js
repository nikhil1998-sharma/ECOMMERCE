import React from "react";
import "./ProductDetails.scss";
import dummyImg from "../../assets/naruto.jpeg";

function ProductDetails() {
  return (
    <div className="ProductDetail">
      <div className="container">
        <div className="product-layout">
          <div className="product-img center">
            <img src={dummyImg} alt="product image" />
          </div>
          <div className="product-info">
            <h1 className="heading">This is the Title, wall poster</h1>
            <h3 className="price">$ 549</h3>
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              nemo minus atque quia et, voluptas dolorum cumque quis itaque a
              dignissimos pariatur molestias facilis fugit aspernatur laborum
              impedit expedita nostrum!
            </p>
            <div className="cart-options">
              <div className="quantity-selector">
                <span className="btn decrement">-</span>
                <span className="quantity">3</span>
                <span className="btn increment">+</span>
              </div>
              <button className="btn-primary add-to-cart">Add To Cart</button>
            </div>
            <div className="return-policy">
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus earum aspernatur alias! Officia ipsum quia labore et
                  qui voluptatum deleniti eos earum ea, tenetur aperiam
                  voluptate molestias, iste architecto ipsam.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magni ducimus iste libero vitae molestiae eaque
                  necessitatibus, eligendi quod asperiores, porro laboriosam
                  ratione perspiciatis sint, soluta possimus recusandae vero
                  nulla impedit!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
