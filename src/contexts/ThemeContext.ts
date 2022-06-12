import {createContext} from "react";
import {Theme, theme} from "../Theme/main";

export const ThemeContext = createContext<Theme>(theme)
