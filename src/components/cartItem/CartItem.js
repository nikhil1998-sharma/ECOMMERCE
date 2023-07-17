import React from "react";
import "./CartItem.scss";
import dummyImg from "../../assets/naruto.jpeg";
import { AiOutlineClose } from "react-icons/ai";

function CartItem() {
  return (
    <div className="CartItem">
      <div className="item-img">
        <img src={dummyImg} alt="" />
      </div>
      <div className="item-info-wrapper">
        <div className="item-info">
          <p className="title">Product Title Here</p>
          <p className="price">₹ 453</p>
          <div className="quantity-selector">
            <span className="btn decrement">-</span>
            <span className="quantity">3</span>
            <span className="btn increment">+</span>
          </div>
          <p className="total-price">Subtotal: ₹ 453</p>
        </div>
        <div className="item-remove">
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
