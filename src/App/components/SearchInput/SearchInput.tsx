import React, { useContext } from 'react';
import { ContextApp, IAppState } from '../../state';
import { ISearchInput } from './interfaces';
import { Content, Container } from './style';

import Input from '../Input';

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
