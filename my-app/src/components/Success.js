import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { AppBarDemo } from "../style";
import RaisedButton from "material-ui/RaisedButton";

export class Success extends Component {
  newUser = () => {
    this.props.newUser();
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBarDemo> Success </AppBarDemo>
          <h1> Thank You For Your Submission </h1>
          <p>You will get an email with further instructions</p>
          <RaisedButton
            label="Register New User"
            primary={true}
            style={styles.button}
            onClick={this.newUser}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15,
  },
};

export default Success;
