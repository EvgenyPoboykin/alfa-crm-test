import { ContextApp, ProviderApp } from './Context';
import { appState } from './appState';
import { User } from './user';
import { importComp, importStyle, importFunc } from './imports';

import * as inter from './interfaces';

export type IItem = inter.IItem;
export type IAppState = inter.IAppState;

export { ContextApp, ProviderApp, appState, User, importComp, importStyle, importFunc };
