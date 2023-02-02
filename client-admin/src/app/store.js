import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "@/features/apiUser";
export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(usersApi.middleware);
  },
});
