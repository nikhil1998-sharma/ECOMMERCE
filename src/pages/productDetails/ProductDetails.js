import React, { useEffect, useState } from "react";
import "./ProductDetails.scss";
import dummyImg from "../../assets/naruto.jpeg";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";

function ProductDetails() {
  const params = useParams();
  const productKey = params.productId;
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartReducer.cart);
  const quantity =
    cart.find((item) => item.key === params.productId)?.quantity || 0;

  async function fetchProduct() {
    const productResponse = await axiosClient.get(
      `/products?filters[key][$eq]=${productKey}&populate=image`
    );
    if (productResponse.data.data.length > 0) {
      setProduct(productResponse.data.data[0]);
    }
    // console.log("Product response : ", productResponse);
  }

  useEffect(() => {
    setProduct(null);
    fetchProduct();
  }, [params]);

  if (!product) {
    return <Loader />;
  }

  // console.log("Params : ", params);

  return (
    <div className="ProductDetail">
      <div className="container">
        <div className="product-layout">
          <div className="product-img">
            <img
              src={product?.attributes?.image?.data?.attributes?.url}
              alt="product image"
            />
          </div>
          <div className="product-info">
            <h1 className="heading">{product?.attributes?.title}</h1>
            <h3 className="price">₹ {product?.attributes?.price}</h3>
            <p className="description">{product?.attributes?.desc}</p>
            <div className="cart-options">
              <div className="quantity-selector">
                <span
                  className="btn decrement"
                  onClick={() => dispatch(removeFromCart(product))}
                >
                  -
                </span>
                <span className="quantity">{quantity}</span>
                <span
                  className="btn increment"
                  onClick={() => dispatch(addToCart(product))}
                >
                  +
                </span>
              </div>
              <button
                className="btn-primary add-to-cart"
                onClick={() => dispatch(addToCart(product))}
              >
                Add To Cart
              </button>
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
