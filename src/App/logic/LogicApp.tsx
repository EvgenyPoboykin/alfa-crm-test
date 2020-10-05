import { useEffect, useState } from 'react';

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

        if (appstate.token === '') {
            // console.log('fetching without login');
            const option: any = LoginOptionsData(email, password);
            console.log({ option });
            const rawData = await fetch(loginUrl, option);
            console.log({ rawData });

            // console.log(rawData);
            const data = await rawData.json();

            const optionC = CustomerOptionsData(data.token);
            const customerRawData = await fetch(customerUrl, optionC);
            const customerData = await customerRawData.json();

            // console.log({ rawData, data, customerRawData, customerData });

            localStorage.setItem('token', data.token);
            localStorage.setItem('email', appstate.email);
            localStorage.setItem('password', appstate.password);

            // console.log({ rawData, data, customerRawData, customerData });

            setAppState((prev: IAppState) => ({
                ...prev,
                fetching: false,
                token: data.token,
                redirect: true,
                email: '',
                password: '',
                items: customerData.items,
            }));
        } else {
            console.log('fetching with login');

            const customerRawData = await fetch(customerUrl, CustomerOptionsData(appstate.token));
            const customerData = await customerRawData.json();

            // console.log({ rawData, data, customerRawData, customerData });

            setAppState((prev: IAppState) => ({
                ...prev,
                fetching: false,
                redirect: true,
                email: '',
                password: '',
                items: customerData.items,
            }));
        }
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

    const AddUser = async (e: React.FormEvent<HTMLFormElement>) => {
        const newUser = { ...userstate };
        e.preventDefault();

        const newItems = [...appstate.items, newUser];

        const rawData = await fetch(createUrl, CreateCustomerOptionsData(appstate.token, newUser));
        const data = await rawData.json();

        console.log({ rawData, data });

        if (data.success) {
            setUserState(User);
            setAppState((prev: IAppState) => ({ ...prev, items: newItems, dialog: false }));
            console.log(data);
        }
    };

    const onClickCancel = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUserState(User);
        setAppState((prev: IAppState) => ({ ...prev, dialog: false }));
    };

    const onClickSearch = () => {
        if (search) {
            console.log(search);
        }
    };

    useEffect(() => {
        const email: any = localStorage.getItem('email');
        const password: any = localStorage.getItem('password');
        const token: any = localStorage.getItem('token');

        if (token !== null && email !== null && password !== null) {
            setAppState((prev: IAppState) => ({
                ...prev,
                token: token,
                password: password,
                email: email,
            }));
        }
    }, []);

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
