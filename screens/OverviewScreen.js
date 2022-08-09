import { useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { FlatList, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

const OverviewScreen = ({ navigation }) => {
  const route = useRoute();
  const id = route.params.categoryId;
  const displayMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(id) >= 0
  );

  function renderMealItem(itemData) {
    const mealItemData = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
    };
    return <MealItem {...mealItemData} />;
  }
  useLayoutEffect(() => {
    const title = CATEGORIES.find((cat) => cat.id === id).title;
    navigation.setOptions({
      title: title,
    });
  }, [id, navigation]);

  return (
    <View>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default OverviewScreen;
