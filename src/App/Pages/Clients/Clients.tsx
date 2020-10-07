import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';
import { ContextApp, IAppState } from '../../state';
import { Container, Content, Btn, BtnContainer } from './style';
import { Header, SearchInput, ItemList, Button, AddUser, Paginate } from '../../components';

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
