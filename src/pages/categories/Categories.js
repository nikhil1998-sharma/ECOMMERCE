import React, { useEffect, useState } from "react";
import "./Categories.scss";
import Product from "../../components/product/Product";
import { useNavigate, useParams } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  const params = useParams();
  const [categoryId, setCategoryId] = useState();

  const categoryList = [
    {
      id: "comics",
      value: "Comics",
    },
    {
      id: "tv-shows",
      value: "TV Shows",
    },
    {
      id: "sports",
      value: "Sports",
    },
  ];

  useEffect(() => {
    setCategoryId(params.categoryId);
    //api call
  }, [params]);

  function updateCategory(e) {
    navigate(`/category/${e.target.value}`);
  }

  return (
    <div className="Categories">
      <div className="container">
        <div className="header">
          <div className="info">
            <h2>Explore All Print and Artwork</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              aspernatur facere odit sed, doloribus dolorem molestiae eius
              voluptatum delectus corporis tempore, in id impedit. Illo eos
              doloribus corporis perferendis maxime?
            </p>
          </div>
          <div className="sort-by">
            <div className="sort-by-container">
              <h3 className="sort-by-text">Sort By</h3>
              <select className="select-sort-by" name="sort-by" id="sort-by">
                <option value="relavance">Relavance</option>
                <option value="newest-first">Newest First</option>
                <option value="price-lth">Price - Low To High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="category-filter">
              <h3>Category</h3>
              {categoryList.map((item) => (
                <div key={item.id} className="filter-radio">
                  <input
                    name="category"
                    value={item.id}
                    type="radio"
                    id={item.id}
                    onChange={updateCategory}
                    checked={categoryId === item.id ? true : false}
                  />
                  <label htmlFor={item.id}>{item.value}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="products-box">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
