import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      en: "",
      vn: ""
    };
  }
  onAdd() {
    const { en, vn } = this.state;
    this.props.dispatch({ type: "ADD", en, vn });
    this.setState({
      en: "",
      vn: ""
    });
    this.props.dispatch({ type: "FORM" });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.en}
          onChangeText={text => this.setState({ en: text })}
          placeholder="English"
        />
        <TextInput
          style={styles.textInput}
          value={this.state.vn}
          onChangeText={text => this.setState({ vn: text })}
          placeholder="VietNamese"
        />
        <TouchableOpacity onPress={() => this.onAdd()}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 400,
    backgroundColor: "#e4f6d4",
    margin: 10,
    paddingHorizontal: 10
  },
  container: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  }
});
export default connect()(Form);
