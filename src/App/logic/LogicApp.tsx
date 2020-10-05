import { useEffect, useState } from 'react';
import _ from 'lodash';
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
    const [itemsstate, setItemsState] = useState<any[]>(appstate.items);
    const [items_origin_state, setOriginItemsState] = useState<any[]>(appstate.items);
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

            // const optionC = CustomerOptionsData(data.token);
            // const customerRawData = await fetch(customerUrl, optionC);
            // const customerData = await customerRawData.json();
            // const newCustomers = [...customerData.items];
            // const items = _.sortBy(newCustomers, 'registr_date', 'asc');

            // console.log({ rawData, data, customerRawData, customerData });

            localStorage.setItem('token', data.token);
            localStorage.setItem('email', appstate.email);
            localStorage.setItem('password', appstate.password);

            // console.log({ rawData, data, customerRawData, customerData });
            // setItemsState(items)
            // setOriginItemsState(items)
            // setAppState((prev: IAppState) => ({
            //     ...prev,
            //     fetching: false,
            //     token: data.token,
            //     redirect: true,
            //     email: '',
            //     password: '',
            //
            // }));
        } else {
            console.log('fetching with login');

            // const customerRawData = await fetch(customerUrl, CustomerOptionsData(appstate.token));
            // // const customerData = await customerRawData.json();
            // const newCustomers = [...customerData.items];
            // const items = _.sortBy(newCustomers, 'registr_date', 'asc');
            // console.log({ rawData, data, customerRawData, customerData });

            // setItemsState(items)
            // setOriginItemsState(items)
            // setAppState((prev: IAppState) => ({
            //     ...prev,
            //     fetching: false,
            //     redirect: true,
            //     email: '',
            //     password: '',
            //
            // }));
        }
    };

    const onPressEnterSubmitAuth = (e: React.KeyboardEvent<HTMLFormElement>) => {
        const { email, password } = appstate;
        if (e.key === 'Enter' && (email !== '' || password !== '')) {
            GetDataFetch();
        }
    };

    const onSubmitAuth = async (e: React.FormEvent<HTMLFormElement>) => {
        const { email, password } = appstate;
        e.preventDefault();
        if (email !== '' || password !== '') {
            GetDataFetch();
        }
    };

    const AddUser = async (e: React.FormEvent<HTMLFormElement>) => {
        const d = new Date();
        const mm = d.getMonth() + 1;
        const dd = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
        const yy = d.getFullYear();
        const newUser = { ...userstate, registr_date: `${yy}-${mm}-${dd}` };
        e.preventDefault();

        const newItems = [...itemsstate, newUser];

        // const rawData = await fetch(createUrl, CreateCustomerOptionsData(appstate.token, newUser));
        // const data = await rawData.json();

        // console.log({ rawData, data });

        // if (data.success) {
        setUserState(User);
        setItemsState(newItems);
        setAppState((prev: IAppState) => ({ ...prev, dialog: false }));
        // console.log(data);
        // }
    };

    const onClickCancel = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUserState(User);
        setAppState((prev: IAppState) => ({ ...prev, dialog: false }));
    };

    const onClickFilter = (field: string, type: boolean) => {
        const userList = [...itemsstate];
        const orderType = type ? 'asc' : 'desc';
        const newUserList = _.orderBy(userList, field, orderType);
        setItemsState(newUserList);
    };

    const onClickSearch = () => {
        console.log(search);
        if (!search) return setItemsState(items_origin_state);

        const filterItems = items_origin_state.filter((item) => {
            return (
                item['name'].toString().toLowerCase().includes(search.toLowerCase()) ||
                item['email'].toString().toLowerCase().includes(search.toLowerCase()) ||
                item['addr'].toString().toLowerCase().includes(search.toLowerCase()) ||
                item['phone'].toString().toLowerCase().includes(search.toLowerCase())
            );
        });

        setItemsState(filterItems);
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

    // console.log(userstate, appstate);

    return {
        appstate,
        userstate,
        itemsstate,
        setSearch,
        setUserState,
        setAppState,
        onSubmitAuth,
        onPressEnterSubmitAuth,
        onClickCancel,
        onClickSearch,
        AddUser,
        onClickFilter,
    };
};
