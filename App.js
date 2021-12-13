import React from "react";
import LoginPage from "./pages/LoginPage";
import { NativeRouter, Routes, Route } from "react-router-native";
import HomePage from "./pages/HomePage";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";

export default function App() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return (
    <Provider store={store}>
      <NativeRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </NativeRouter>
    </Provider>
  );
}
