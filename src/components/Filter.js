import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";

class Filter extends Component {
  getTextStyle(statusName) {
    if (statusName === this.props.filterStatus) {
      return { color: "yellow", fontWeight: "bold" };
    }
    return styles.buttonText;
  }

  handleChange(status) {
    this.props.dispatch({ type: status });
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.handleChange("SHOW_ALL")}>
          <Text style={this.getTextStyle("SHOW_ALL")}>Show All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleChange("MEMORIED")}>
          <Text style={this.getTextStyle("MEMORIED")}>Memorized</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleChange("NEED_PRACTICE")}>
          <Text style={this.getTextStyle("NEED_PRACTICE")}>Need practice</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#583c3c",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  buttonText: { color: "white" }
});

const mapStatToProps = state => {
  return {
    filterStatus: state.filterStatus
  };
};
export default connect(mapStatToProps)(Filter);
