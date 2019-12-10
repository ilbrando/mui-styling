import React from "react";
import { ITheme } from "./theme";

export const ThemeContext = React.createContext<ITheme | null>(null);
