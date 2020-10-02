import React, { Suspense } from 'react';
import { ProviderApp } from '../state';
import { LogicApp } from './LogicApp';

interface ILogic {
    children: React.ReactNode;
}

export const Logic: React.FC<ILogic> = ({ children }) => {
    const logic = LogicApp();
    return (
        <ProviderApp value={logic}>
            <Suspense fallback={'...Loading'}>{children}</Suspense>
        </ProviderApp>
    );
};
