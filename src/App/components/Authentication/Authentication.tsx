import React, { memo, lazy, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { ContextApp, IAppState } from '../../state';

const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));
const FormContainer = lazy(() => import('./style').then((mod) => ({ default: mod.FormContainer })));
const Form = lazy(() => import('./style').then((mod) => ({ default: mod.Form })));

const Logotype = lazy(() => import('../Logotype'));
const Input = lazy(() => import('../Input'));
const Button = lazy(() => import('../Button'));
const Loader = lazy(() => import('../Loader'));

const Authentication: React.FC = memo(() => {
    const {
        onSubmitAuth,
        onPressEnterSubmitAuth,
        setAppState,
        appstate: { email, password, fetching, redirect },
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
});
export default Authentication;
