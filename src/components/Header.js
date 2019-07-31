import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";

class Header extends Component {
  addForm() {
    this.props.dispatch({ type: "FORM" });
  }
  render() {
    return (
      <View style={styles.header}>
        <Text />
        <Text>My word</Text>
        <TouchableOpacity onPress={() => this.addForm()}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row"
  }
});

export default connect()(Header);
