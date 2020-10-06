import React, { useContext } from 'react';
import { ContextApp, IAppState } from '../../state';
import { Container, Content, Btn, BtnContainer } from './style';
import Header from '../Header';
import SearchInput from '../SearchInput';
import ItemList from '../ItemList';
import Button from '../Button';
import AddUser from '../AddUser';

const Page: React.FC = () => {
    const { setAppState } = useContext(ContextApp);
    return (
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
                <ItemList />
            </Content>
        </Container>
    );
};
export default Page;
