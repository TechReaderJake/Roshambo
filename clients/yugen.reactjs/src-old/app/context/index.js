import React from 'react';
import { themes } from '../Themes';

export const UserContext = React.createContext({});
export const WorldContext = React.createContext("");
export const BookContext = React.createContext("");
export const ThemeContext = React.createContext(themes.night);

// export const UserProvider = UserContext.Provider;
// export const UserConsumer = UserContext.Consumer;

// export const WorldProvider = WorldContext.Provider;
// export const WorldConsumer = WorldContext.Consumer;

// export const BookProvider = BookContext.Provider;
// export const BookConsumer = BookContext.Consumer;

// export const ThemeProvider = ThemeContext.Provider;
// export const ThemeConsumer = ThemeContext.Consumer;