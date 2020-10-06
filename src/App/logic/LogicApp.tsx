import { useState, useCallback } from 'react';
import _ from 'lodash';

import { appState, IAppState, User } from '../state';
import { IItem } from '../state/interfaces';

import fetchToken from './fetching/fetchToken';
import fetchData from './fetching/fetchData';

export const LogicApp = () => {
    const [app_state, setAppState] = useState<IAppState>(appState);
    const [fetching, setFetching] = useState<boolean>(false);
    const [redirect_from_form, setRedirectFromForm] = useState<boolean>(false);
    const [user_state, setUserState] = useState<IItem>(User);
    const [items_state, setItemsState] = useState<any[]>([]);
    const [items_origin_state, setOriginItemsState] = useState<any[]>([]);
    const [search, setSearch] = useState<string>('');

    const GetDataFetch = useCallback(async () => {
        const { email, password } = app_state;

        setFetching(true);

        const token = await fetchToken(email, password);
        const items = await fetchData(token);

        console.log({ token, items });

        setItemsState(items);
        setOriginItemsState(items);
        setFetching(false);
        setRedirectFromForm(true);
    }, [setFetching, setItemsState, setOriginItemsState, setRedirectFromForm, app_state]);

    const onPressEnterSubmitAuth = (e: React.KeyboardEvent<HTMLFormElement>) => {
        const { email, password } = app_state;
        if (e.key === 'Enter' && (email !== '' || password !== '')) {
            GetDataFetch();
        }
    };

    const onSubmitAuth = async (e: React.FormEvent<HTMLFormElement>) => {
        const { email, password } = app_state;
        e.preventDefault();
        if (email !== '' || password !== '') {
            GetDataFetch();
        }
    };

    const AddUser = async (e: React.FormEvent<HTMLFormElement>) => {
        const newUser = { ...user_state };
        e.preventDefault();

        const newItems = [...items_state, newUser];

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
        const userList = [...items_state];
        const orderType = type ? 'asc' : 'desc';
        const newUserList = _.orderBy(userList, field, orderType);
        setItemsState(newUserList);
    };

    const onClickSearch = () => {
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

    const onKeyDownSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickSearch();
        }
    };

    console.log(items_state, items_origin_state);

    return {
        app_state,
        user_state,
        items_state,
        fetching,
        redirect_from_form,
        setSearch,
        setUserState,
        setAppState,
        onSubmitAuth,
        onPressEnterSubmitAuth,
        onClickCancel,
        onClickSearch,
        AddUser,
        onClickFilter,
        onKeyDownSearch,
    };
};
