import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { ContextApp, IAppState } from '../../state';
import { Container, Form, FormContainer } from './style';
import Logotype from '../Logotype';
import Input from '../Input';
import Button from '../Button';
import Loader from '../Loader';

const Authentication: React.FC = () => {
    const {
        onSubmitAuth,
        onPressEnterSubmitAuth,
        setAppState,
        app_state: { email, password, fetching, redirect },
    } = useContext(ContextApp);

    const preloadFetch = fetching ? <Loader /> : null;
    return redirect ? (
        <Redirect to='/customer' />
    ) : (
        <Container>
            <FormContainer>
                <Form onSubmit={onSubmitAuth} onKeyDown={onPressEnterSubmitAuth}>
                    <Logotype />
                    <Input
                        placeholder='e-mail'
                        type='email'
                        getValue={(value) => setAppState((prev: IAppState) => ({ ...prev, email: value }))}
                        defaultValue={email}
                    />
                    <Input
                        placeholder='api key'
                        type='password'
                        defaultValue={password}
                        getValue={(value) => setAppState((prev: IAppState) => ({ ...prev, password: value }))}
                    />
                    <Button
                        name='АВТОРИЗОВАТЬСЯ'
                        color='blue'
                        preloader={preloadFetch}
                        disable={email === '' || password === ''}
                    />
                </Form>
            </FormContainer>
        </Container>
    );
};
export default Authentication;
