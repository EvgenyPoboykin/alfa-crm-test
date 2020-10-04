import { useState } from 'react';

import {
    LoginOptionsData,
    CustomerOptionsData,
    CreateCustomerOptionsData,
    loginUrl,
    customerUrl,
    createUrl,
} from './logger';
import { appState, IAppState, User } from '../state';
import { IItem } from '../state/interfaces';

export const LogicApp = () => {
    const [appstate, setAppState] = useState<IAppState>(appState);
    const [userstate, setUserState] = useState<IItem>(User);
    const [search, setSearch] = useState<string>('');

    const GetDataFetch = async () => {
        const { email, password } = appstate;

        setAppState((prev: IAppState) => ({ ...prev, fetching: true }));

        const rawData = await fetch(loginUrl, LoginOptionsData(email, password));
        const data = await rawData.json();
        const customerRawData = await fetch(customerUrl, CustomerOptionsData(data.token));
        const customerData = await customerRawData.json();

        console.log({ data: customerData, raw: customerRawData });

        setAppState((prev: IAppState) => ({
            ...prev,
            fetching: false,
            token: data.token,
            redirect: true,
            email: '',
            password: '',
            items: customerData.items,
        }));
    };

    const onPressEnterSubmitAuth = (e: React.KeyboardEvent<HTMLFormElement>) => {
        const { email, password } = appstate;

        if (e.key === 'Enter' && (email !== '' || password !== '')) {
            GetDataFetch();
        }
        return;
    };
    const onSubmitAuth = async (e: React.FormEvent<HTMLFormElement>) => {
        const { email, password } = appstate;
        e.preventDefault();
        if (email !== '' || password !== '') {
            GetDataFetch();
        }
    };

    const AddUser = async () => {
        const newUser = { ...userstate };

        const newItems = [...appstate.items, newUser];

        const rawData = await fetch(createUrl, CreateCustomerOptionsData(appstate.token, newUser));
        const data = await rawData.json();

        if (data.success) {
            setAppState((prev: IAppState) => ({ ...prev, items: newItems, dialog: false }));
            setUserState(User);
            console.log(data);
        }
    };

    const onClickCancel = () => {
        setUserState(User);
        setAppState((prev: IAppState) => ({ ...prev, dialog: false }));
    };
    const onClickSearch = () => {
        if (search) {
            console.log(search);
        }
    };

    console.log(userstate, appstate);

    return {
        appstate,
        userstate,
        setSearch,
        setUserState,
        setAppState,
        onSubmitAuth,
        onPressEnterSubmitAuth,
        onClickCancel,
        onClickSearch,
        AddUser,
    };
};
