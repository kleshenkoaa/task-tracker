import { combineReducers } from "redux";
import { itemsReducer } from "./Items";
import { projectsReducer } from "./Project";
import { themeReducer } from "./Theme";

export const rootReducer = combineReducers({
  theme: themeReducer,
  tasksByIds: itemsReducer,
  projectsByIds: projectsReducer,
});