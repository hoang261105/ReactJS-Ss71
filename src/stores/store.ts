import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/countReducer";
import randomReducer from "./reducers/randomReducer";
import lightDarkReducer from "./reducers/lightDarkReducer";
import viewReducer from "./reducers/viewReducer";
import menuReducer from "./reducers/menuReducer";
import languageReducer from "./reducers/languageReducer";
import userReducer from "./reducers/userReducer";

export const store: any = configureStore({
    reducer: {
        count: countReducer,
        random: randomReducer,
        lightdark: lightDarkReducer,
        view: viewReducer,
        menu: menuReducer,
        language: languageReducer,
        user: userReducer
    }
})