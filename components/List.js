import React from "react";
import { StyleSheet, View, Text } from "react-native";

const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View style={styles.list} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};
const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    borderRadius: 6,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
export default List;
