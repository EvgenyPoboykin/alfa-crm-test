import React, { memo, lazy, useContext } from 'react';
import { ContextApp, IFormObject } from '../../state';

const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));
const FormContainer = lazy(() => import('./style').then((mod) => ({ default: mod.FormContainer })));
const Form = lazy(() => import('./style').then((mod) => ({ default: mod.Form })));

const Logotype = lazy(() => import('../Logotype'));
const Input = lazy(() => import('../Input'));
const Button = lazy(() => import('../Button'));
const CheckboxWithText = lazy(() => import('../CheckboxWithText'));

const Authentication: React.FC = memo(() => {
    const {
        onSubmitAuth,
        onPressEnterSubmitAuth,
        setForm,
        form: { email, password, rememberMe },
    } = useContext(ContextApp);
    return (
        <Container>
            <FormContainer>
                <Form onSubmit={onSubmitAuth} onKeyDown={onPressEnterSubmitAuth}>
                    <Logotype />
                    <Input
                        placeholder='e-mail'
                        type='email'
                        getValue={(value) => setForm((prev: IFormObject) => ({ ...prev, email: value }))}
                        defaultValue={email}
                    />
                    <Input
                        placeholder='api key'
                        type='password'
                        defaultValue={password}
                        getValue={(value) => setForm((prev: IFormObject) => ({ ...prev, password: value }))}
                    />
                    <Button name='АВТОРИЗОВАТЬСЯ' disable={email === '' || password === ''} />
                    <CheckboxWithText
                        name='Запомнить меня'
                        value={rememberMe}
                        getValue={(value) => setForm((prev: IFormObject) => ({ ...prev, rememberMe: value }))}
                    />
                </Form>
            </FormContainer>
        </Container>
    );
});
export default Authentication;
