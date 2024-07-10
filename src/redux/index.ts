import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { apiService } from "./service/api";
import { AuthenticationSlice } from "./ui/authentication";

export const store = configureStore({
  reducer: combineSlices(
    AuthenticationSlice,
    apiService,
  ),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiService.middleware),
});
