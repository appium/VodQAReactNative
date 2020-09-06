import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const DATA = [
  {
    id: "item1",
    title: "C",
  },
  {
    id: "item2",
    title: "C++",
  },
  {
    id: "item3",
    title: "Javascript",
  },
  {
    id: "item4",
    title: "Python",
  },
  {
    id: "item5",
    title: "Ruby",
  },
  {
    id: "item6",
    title: "RR",
  },
  {
    id: "item7",
    title: "Java",
  },
  {
    id: "item8",
    title: "C#",
  },
  {
    id: "item9",
    title: ".net",
  },
  {
    id: "item10",
    title: "MySql",
  },
  {
    id: "item11",
    title: "Appium",
  },
  {
    id: "item12",
    title: "Jasmine",
  },
  {
    id: "item13",
    title: "Jest",
  },
  {
    id: "item14",
    title: "Karma",
  },
];

class ListViewVerticalSwipe extends Component {
  constructor() {
    super();
  }

  renderRowView = ({item}) => {
    return (
      <View style={styles.viewWrapper}>
        <Text style={styles.text}> {item.title}</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={this.renderRowView}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: 96,
  },
  viewWrapper: {
    padding: 20,
    borderColor: "#d6d6d6",
    backgroundColor: "#002546",
    borderWidth: 1,
    margin: 10,
  },
  text: {
    color: "#ECBA00",
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
    fontWeight: "900",
  },
});

export default ListViewVerticalSwipe;
