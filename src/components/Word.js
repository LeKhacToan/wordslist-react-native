import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class Word extends Component {
  handleChangeMemo(id) {
    if (this.props.myWord.memorized == false) {
      this.props.dispatch({ type: "MM", id: id });
    } else {
      this.props.dispatch({ type: "UM", id: id });
    }
  }
  render() {
    const { myWord } = this.props;
    const textDecorationLine = myWord.memorized ? "line-through" : "none";
    const memo = myWord.memorized ? "Unmemorized" : "Memorized";
    return (
      <View style={styles.container}>
        <Text style={{ textDecorationLine: textDecorationLine }}>
          {myWord.en}
        </Text>
        <Text>{myWord.vn}</Text>
        <View style={styles.controller}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleChangeMemo(myWord.id)}
          >
            <Text>{memo}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Show</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D2DEF6",
    padding: 10,
    margin: 10
  },
  controller: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    margin: 10
  }
});
const mapStateToProps = state => {};
export default connect()(Word);
