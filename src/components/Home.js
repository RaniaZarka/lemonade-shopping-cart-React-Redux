import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, subtractQuantity } from "./actions/cartActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Total from "./Total";

class Home extends Component {
  handleClickAdd = (id) => {
    this.props.addToCart(id);
  };

  handleClickRemove = (id) => {
    this.props.subtractQuantity(id);
  };

  render() {
    let productList = this.props.items.map((product) => {
      return (
        <div className="card" key={product.id}>
          <div>
            <div className="card-image">
              <img src={product.image} alt={product.title} />
              <span className="card-title">{product.title}</span>
            </div>

            <div className="card-content">
              <p>{product.description}</p>
              <p>
                <b>Price: {product.price} kr</b>

                <span
                  to="/"
                  className="btn-floating btn-small halfway-fab waves-effect waves-light green"
                  onClick={() => {
                    this.handleClickAdd(product.id);
                  }}
                >
                  <i className="material-icons">add</i>
                </span>
                <span
                  to="/"
                  className="btn-floating btn-small halfway-fab waves-effect waves-light green mg4rem"
                  onClick={() => {
                    this.handleClickRemove(product.id);
                  }}
                >
                  <i className="material-icons">remove</i>
                </span>
              </p>
              <ToastContainer autoClose={1000} />
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="box">{productList}</div>

        <div>
          {" "}
          <Total />{" "}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
