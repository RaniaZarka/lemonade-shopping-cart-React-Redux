import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Home extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  notify = () => toast(" added to cart");

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.image} alt={item.title} />
            <span className="card-title">{item.title}</span>
          </div>

          <div className="card-content">
            <p>{item.description}</p>
            <p>
              <b>Price: {item.price} kr</b>
              <span
                to="/"
                className="btn-floating halfway-fab waves-effect waves-light green"
                onClick={() => {
                  this.handleClick(item.id);
                }}
              >
                <i className="material-icons">add</i>
              </span>
            </p>

            <ToastContainer autoClose={1000} />
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="box">{itemList}</div>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
