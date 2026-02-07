import { create} from 'zustand'
import { devtools} from 'zustand/middleware'
import { createRecipesSlice, type RecipeSliceType } from './recipeSlice'
import {type FavoritesSliceType, createFavoritesSlice} from './favoritesSlice'
import { type NotificationSliceType, createNotificationSlice } from './notificationSlice'
import { createAISlice, type AISlice } from './aiSlice'

export const useAppStore = create<RecipeSliceType & FavoritesSliceType & NotificationSliceType & AISlice>()(devtools( (...a) => ({
...createRecipesSlice(...a),
...createFavoritesSlice(...a),
...createNotificationSlice(...a),
...createAISlice(...a)

})))