import React, { lazy, memo, useContext } from 'react';
import { ContextApp, IAppState } from '../../state';

const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));
const Content = lazy(() => import('./style').then((mod) => ({ default: mod.Content })));
const Btn = lazy(() => import('./style').then((mod) => ({ default: mod.Btn })));
const BtnContainer = lazy(() => import('./style').then((mod) => ({ default: mod.BtnContainer })));

const Header = lazy(() => import('../Header'));
const SearchInput = lazy(() => import('../SearchInput'));
const ItemList = lazy(() => import('../ItemList'));
const Button = lazy(() => import('../Button'));
const AddUser = lazy(() => import('../AddUser'));

const Page: React.FC = memo(() => {
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
});
export default Page;
