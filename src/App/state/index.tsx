import { ContextApp, ProviderApp } from './Context';
import { formObject } from './formObject';
import { appState } from './appState';
import { User } from './user';

import * as inter from './interfaces';

export type IProvider = inter.IProvider;
export type IData = inter.IData;
export type IItem = inter.IItem;
export type IFormObject = inter.IFormObject;
export type IAppState = inter.IAppState;

export { ContextApp, ProviderApp, formObject, appState, User };
