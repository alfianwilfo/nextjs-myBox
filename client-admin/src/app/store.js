import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "@/features/apiUser";
import { productsApi } from "@/features/apiProducts";
export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(productsApi.middleware);
  },
});
