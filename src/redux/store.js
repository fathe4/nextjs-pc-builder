import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import PcBuilderSlice from "./features/pcBuilder/PcBuilderSlice";

export default configureStore({
  reducer: {
    pcBuilder: PcBuilderSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
