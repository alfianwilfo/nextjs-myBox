import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "@/features/apiSlice";
import { usersApi } from "@/features/apiUser";
export default configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(usersApi.middleware);
  },
});
