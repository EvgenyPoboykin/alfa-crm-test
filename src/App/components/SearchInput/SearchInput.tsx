import React, { useContext, lazy } from 'react';
import { ContextApp, IAppState } from '../../state';
import { ISearchInput } from './interfaces';

const Input = lazy(() => import('../Input'));

const Container = lazy(() => import('./style').then((m) => ({ default: m.Container })));
const Content = lazy(() => import('./style').then((m) => ({ default: m.Content })));

const SearchInput: React.FC<ISearchInput> = () => {
    const { setSearch, onKeyDownSearch, setAppState } = useContext(ContextApp);
    return (
        <Container>
            <Content>
                <Input
                    placeholder='Поиск по списку...'
                    defaultValue=''
                    getValue={(value) => {
                        setSearch(value);
                        setAppState((prev: IAppState) => ({ ...prev, currentPage: 0 }));
                    }}
                    visiblePlaceholder={false}
                    onKeyDown={onKeyDownSearch}
                />
            </Content>
        </Container>
    );
};
export default SearchInput;
