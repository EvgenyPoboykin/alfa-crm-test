import React, { useContext, lazy } from 'react';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';
import { ContextApp, IAppState } from '../../state';

const Header = lazy(() => import('../../components').then((m) => ({ default: m.Header })));
const SearchInput = lazy(() => import('../../components').then((m) => ({ default: m.SearchInput })));
const ItemList = lazy(() => import('../../components').then((m) => ({ default: m.ItemList })));
const Button = lazy(() => import('../../components').then((m) => ({ default: m.Button })));
const AddUser = lazy(() => import('../../components').then((m) => ({ default: m.AddUser })));
const Paginate = lazy(() => import('../../components').then((m) => ({ default: m.Paginate })));

const Container = lazy(() => import('./style').then((m) => ({ default: m.Container })));
const Content = lazy(() => import('./style').then((m) => ({ default: m.Content })));
const Btn = lazy(() => import('./style').then((m) => ({ default: m.Btn })));
const BtnContainer = lazy(() => import('./style').then((m) => ({ default: m.BtnContainer })));

const clientCount = 32;

const Clients: React.FC = () => {
    const {
        setAppState,
        app_state: { isAuth, currentPage },
        items_state,
        search,
    } = useContext(ContextApp);

    const FilterData = () => {
        if (!search) {
            return items_state;
        }

        return items_state.filter((item: any) => {
            return (
                item['name'].toString().toLowerCase().includes(search.toLowerCase()) ||
                item['email'].toString().toLowerCase().includes(search.toLowerCase()) ||
                item['addr'].toString().toLowerCase().includes(search.toLowerCase()) ||
                item['phone'].toString().toLowerCase().includes(search.toLowerCase()) ||
                item['balance'].toString().toLowerCase().includes(search.toLowerCase())
            );
        });
    };

    const countPage = Math.ceil(FilterData.length / clientCount);
    const DisplayData = _.chunk(FilterData(), clientCount)[currentPage];

    return isAuth ? (
        <Container>
            <Content>
                <AddUser />
                <Header />
                <SearchInput />
                <Btn>
                    <BtnContainer>
                        <Button
                            name='добавить пользователя'
                            color='green'
                            onClick={() => setAppState((prev: IAppState) => ({ ...prev, dialog: true }))}
                        />
                    </BtnContainer>
                </Btn>
                <ItemList DisplayData={DisplayData} />
                {countPage > 0 ? <Paginate countPage={countPage} /> : null}
            </Content>
        </Container>
    ) : (
        <Redirect to='/' />
    );
};
export default Clients;
