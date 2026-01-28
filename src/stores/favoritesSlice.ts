import type { StateCreator } from "zustand";
import type { Recipe } from "../types";
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlice";
import type { RecipeSliceType } from "./recipeSlice";

export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  favoriteExists: (id: Recipe["idDrink"]) => boolean;
  loadFromStorage: () => void;
};

export const createFavoritesSlice: 
StateCreator<FavoritesSliceType & RecipeSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (
  set,
  get,
  api) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if (get().favoriteExists(recipe.idDrink)) {
      set((state) => ({
        favorites: state.favorites.filter(
          (favorite) => favorite.idDrink !== recipe.idDrink
        ),
      }));
      createNotificationSlice(set, get, api).showNotification({ 
        text: 'Removed from favorites', 
        error: false 
      })
    } else {
      set((state) => ({
        favorites: [...state.favorites, recipe],
      }));
       createNotificationSlice(set, get, api).showNotification({ 
        text: 'Added to favorites', 
        error: false 
      })
    }
    localStorage.setItem("favorites", JSON.stringify(get().favorites));
  },
  favoriteExists: (id) => {
    return get().favorites.some((Favorite) => Favorite.idDrink === id);
  },
  loadFromStorage: () => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      set({
        favorites: JSON.parse(storedFavorites),
      });
    }
  },
});

//Slice Pattern
