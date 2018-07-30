import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class DashboardPage extends React.Component {

  render() {
    const { isConfirmed } = this.props;
    return (
      <div>
        <h1>welcome to Dashboard!</h1>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
  };
}

export default connect(mapStateToProps, null)(DashboardPage);