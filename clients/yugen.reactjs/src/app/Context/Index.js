import React from 'react';

const UserContext = React.createContext({});
const WorldContext = React.createContext("");
const BookContext = React.createContext("");

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export const WorldProvider = WorldContext.Provider;
export const WorldConsumer = WorldContext.Consumer;

export const BookProvider = BookContext.Provider;
export const BookConsumer = BookContext.Consumer;

export const UserContext;
export const WorldContext;
export const BookContext;