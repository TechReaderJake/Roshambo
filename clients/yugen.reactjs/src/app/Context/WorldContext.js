import React from 'react';

const WorldContext = React.createContext("");

export const WorldProvider = WorldContext.Provider;
export const WorldConsumer = WorldContext.Consumer;

export default WorldContext;