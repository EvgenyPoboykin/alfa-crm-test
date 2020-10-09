import React, { useContext, lazy } from 'react';
import { Redirect } from 'react-router-dom';
import { ContextApp, IAppState } from '../../state';

const Logotype = lazy(() => import('../../components').then((m) => ({ default: m.Logotype })));
const Input = lazy(() => import('../../components').then((m) => ({ default: m.Input })));
const Button = lazy(() => import('../../components').then((m) => ({ default: m.Button })));
const Loader = lazy(() => import('../../components').then((m) => ({ default: m.Loader })));

const Container = lazy(() => import('./style').then((m) => ({ default: m.Container })));
const Form = lazy(() => import('./style').then((m) => ({ default: m.Form })));
const FormContainer = lazy(() => import('./style').then((m) => ({ default: m.FormContainer })));

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
