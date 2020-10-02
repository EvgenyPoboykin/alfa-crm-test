import React, { createContext } from 'react';
import { IProvider } from './interfaces';

export const ContextApp = createContext<any>(null);

export const ProviderApp: React.FC<IProvider> = ({ children, value }) => (
    <ContextApp.Provider value={value}>{children}</ContextApp.Provider>
);
