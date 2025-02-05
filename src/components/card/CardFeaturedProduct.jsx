import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";

const CardFeaturedProduct = (props) => {
  const products = props.data;
  return (
    <div className="card mb-3">
      <div className="card-header fw-bold text-uppercase" style={{background:"#8597ff"}}>
        Featured Products
      </div>
      <div className="card-body">
        {products.map((product, idx) => (
          <div
            className={`row ${idx + 1 === products.length ? "" : "mb-3"}`}
            key={idx}
          >
            <div className="col-md-4">
              <img src={product.images[0].url} className="img-fluid" alt="..." />
            </div>
            <div className="col-md-8">
              <h6 className="text-capitalize mb-1"  style={{color:"#8597ff"}}>
                <Link to= {`/product/detail/${product._id}`} className="text-decoration-none"  style={{color:"#8597ff"}}>
                  {product.name}
                </Link>
              </h6>
              <h7>{product.description}</h7>
              <div className="mb-2">
                {Array.from({ length: 4 }, (_, key) => (
                  <IconStarFill className="text-warning me-1" key={key} />
                ))}
              </div>
              <span className="fw-bold h5">${product.price}</span>
              {product.originPrice > 0 && (
                <del className="small text-muted ms-2">
                  ${product.price}
                </del>
              )}
            </div>
            <hr style={{background:"#8597ff"}} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardFeaturedProduct;
