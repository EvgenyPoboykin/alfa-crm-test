import React, { lazy, memo, useContext } from 'react';
import { ContextApp } from '../../state';
import { ISearchInput } from './interfaces';

const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));
const Content = lazy(() => import('./style').then((mod) => ({ default: mod.Content })));
const BtnContainer = lazy(() => import('./style').then((mod) => ({ default: mod.BtnContainer })));
const Input = lazy(() => import('../Input'));
const Button = lazy(() => import('../Button'));

const SearchInput: React.FC<ISearchInput> = memo(() => {
    const { onClickSearch, setSearch } = useContext(ContextApp);
    return (
        <Container>
            <Content>
                <Input
                    placeholder='Поиск по списку...'
                    defaultValue=''
                    getValue={(value) => setSearch(value)}
                    visiblePlaceholder={false}
                />
                <BtnContainer>
                    <Button name='поиск' onClick={onClickSearch} />
                </BtnContainer>
            </Content>
        </Container>
    );
});
export default SearchInput;
