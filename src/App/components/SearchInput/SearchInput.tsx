import React, { useContext } from 'react';
import { ContextApp } from '../../state';
import { ISearchInput } from './interfaces';
import { Content, Container, BtnContainer } from './style';
import Button from '../Button';
import Input from '../Input';

const SearchInput: React.FC<ISearchInput> = () => {
    const { onClickSearch, setSearch, onKeyDownSearch } = useContext(ContextApp);
    return (
        <Container>
            <Content>
                <Input
                    placeholder='Поиск по списку...'
                    defaultValue=''
                    getValue={(value) => setSearch(value)}
                    visiblePlaceholder={false}
                    onKeyDown={onKeyDownSearch}
                />
                <BtnContainer>
                    <Button name='поиск' onClick={onClickSearch} />
                </BtnContainer>
            </Content>
        </Container>
    );
};
export default SearchInput;
