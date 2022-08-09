import React from "react";
import { FlatList } from "react-native";
import CategoryTile from "../components/CategoryTile.js";
import { CATEGORIES } from "../data/dummy-data.js";

const CategoriesScreen = ({ navigation }) => {
  function renderCategoryItem(itemData) {
    function navigate() {
      navigation.navigate("overview", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryTile
        onPress={navigate}
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(itemData, index) => itemData.id}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
