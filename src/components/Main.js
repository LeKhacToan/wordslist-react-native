import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import Word from "./Word";
import Filter from "./Filter";
import Header from "./Header";
import Form from "./Form";

class Main extends Component {
  getWordList() {
    const { filterStatus, wordList } = this.props;
    if (filterStatus == "MEMORIED") return wordList.filter(e => e.memorized);
    if (filterStatus == "NEED_PRACTICE")
      return wordList.filter(e => !e.memorized);
    return wordList;
  }
  render() {
    return (
      <View
        style={{
          backgroundColor: "yellow",
          flex: 1,
          alignSelf: "stretch",
          justifyContent: "center"
        }}
      >
        <Header />
        <View style={{ flex: 10 }}>
          {this.props.isAdding ? <Form /> : null}
          <FlatList
            data={this.getWordList()}
            renderItem={({ item }) => <Word myWord={item} />}
          />
        </View>
        <Filter />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    filterStatus: state.filterStatus,
    wordList: state.wordList,
    isAdding: state.isAdding
  };
};

export default connect(mapStateToProps)(Main);
