import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './Featured/BasketSlice';
import restaurantReducer from './Featured/RestaurantSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});
