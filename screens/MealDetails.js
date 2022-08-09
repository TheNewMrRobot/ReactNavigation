import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import List from "../components/List";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
const MealDetail = () => {
  const route = useRoute();
  const id = route.params.id;
  const selectedMeal = MEALS.find((meal) => meal.id === id);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View></View>
      <MealDetails
        affordability={selectedMeal.affordability}
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Ingridents</Text>
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <View style={styles.listContainer}>
          <List data={selectedMeal.ingredients} />
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Steps</Text>
          </View>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    margin: 8,
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    margin: 6,
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginHorizontal: 12,
  },
  listContainer: {
    width: "80%",
  },
});
export default MealDetail;
