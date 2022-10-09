import React, { Component } from "react";
import { connect } from "react-redux";

class Total extends Component {
  render() {
    return (
      <div className="container">
        <div className="collection">
          <li className="collection-item">
            <label>
              <input type="checkbox" onChange={this.handleChecked} />
            </label>
          </li>
          <li className="collection-item">
            <b>Total: {this.props.total} kr</b>
          </li>
        </div>
        {/* <div className="checkout">
          <button className="waves-effect waves-light btn">Checkout</button>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
  };
};
export default connect(mapStateToProps)(Total);
