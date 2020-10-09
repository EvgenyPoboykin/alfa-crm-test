import { useState } from 'react';
import _ from 'lodash';

import { appState, IAppState, IItem, User } from '../state';

export const LogicApp = () => {
    const [app_state, setAppState] = useState<IAppState>(appState);
    const [user_state, setUserState] = useState<IItem>(User);
    const [items_state, setItemsState] = useState<any>(null);
    const [search, setSearch] = useState<string>('');

    const GetDataFetch = async () => {
        const { email, password } = app_state;

        setAppState((prev: any) => ({ ...prev, fetching: true }));

        const { fetchToken } = await import('./fetching/fetchToken');
        const token = await fetchToken(email, password);

        const { fetchData } = await import('./fetching/fetchData');
        const items = await fetchData(token);

        setItemsState([...items]);
        setAppState((prev: any) => ({
            ...prev,
            fetching: false,
            redirect: true,
            token,
            isAuth: true,
        }));
    };

    const AddUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAppState((prev: any) => ({ ...prev, fetching: true }));

        const { fetchAddUser } = await import('./fetching/fetchAddUser');
        const rawData = await fetchAddUser(app_state.token, user_state);

        if (rawData.success) {
            const { fetchData } = await import('./fetching/fetchData');
            const items = await fetchData(app_state.token);
            setUserState(User);
            setItemsState(items);
            setAppState((prev: IAppState) => ({ ...prev, dialog: false, fetching: false }));
        }
    };

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

    const onClickCancel = () => {
        setUserState(User);
        setAppState((prev: IAppState) => ({ ...prev, dialog: false }));
    };

    const onClickFilter = (field: string, type: boolean) => {
        const userList = [...items_state];
        const orderType = type ? 'asc' : 'desc';
        const newUserList = _.orderBy(userList, field, orderType);
        setItemsState(newUserList);
    };

    const handlePageClick = (select: any) => {
        setAppState((prev: IAppState) => ({ ...prev, currentPage: select.selected }));
    };

    return {
        app_state,
        user_state,
        items_state,
        search,
        setSearch,
        setUserState,
        setAppState,
        onSubmitAuth,
        onPressEnterSubmitAuth,
        onClickCancel,
        AddUser,
        onClickFilter,
        handlePageClick,
    };
};
