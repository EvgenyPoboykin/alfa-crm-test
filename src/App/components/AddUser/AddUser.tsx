import React, { useContext, lazy } from 'react';
import { ContextApp, IAppState, IItem } from '../../state';
import { IAddUser } from './interfaces';

const Input = lazy(() => import('../Input'));
const Button = lazy(() => import('../Button'));
const Loader = lazy(() => import('../Loader'));

const Container = lazy(() => import('./style').then((m) => ({ default: m.Container })));
const Form = lazy(() => import('./style').then((m) => ({ default: m.Form })));
const FormName = lazy(() => import('./style').then((m) => ({ default: m.FormName })));
const BtnControl = lazy(() => import('./style').then((m) => ({ default: m.BtnControl })));
const BtnsControl = lazy(() => import('./style').then((m) => ({ default: m.BtnsControl })));
const Bg = lazy(() => import('./style').then((m) => ({ default: m.Bg })));

const AddUser: React.FC<IAddUser> = () => {
    const {
        app_state: { dialog, fetching },
        user_state: { name, dob, email, phone, addr },
        setUserState,
        setAppState,
        AddUser,
        onClickCancel,
    } = useContext(ContextApp);

    const preloadFetch = fetching ? <Loader /> : null;

    return (
        <Container dialog={dialog}>
            <Form>
                <FormName>Добавить пользователя</FormName>
                <Input
                    placeholder='имя'
                    getValue={(value) => setUserState((prev: IItem) => ({ ...prev, name: value }))}
                    defaultValue={name}
                />
                <Input
                    placeholder='дата рождения'
                    getValue={(value) => setUserState((prev: IItem) => ({ ...prev, dob: value }))}
                    defaultValue={dob}
                    type='date'
                />
                <Input
                    placeholder='электронная почта'
                    getValue={(value) => setUserState((prev: IItem) => ({ ...prev, email: value.split(', ') }))}
                    defaultValue={email.join(', ')}
                    type='email'
                />
                <Input
                    placeholder='телефон без +7, через запятую'
                    getValue={(value) => setUserState((prev: IItem) => ({ ...prev, phone: value.split(', ') }))}
                    defaultValue={phone.join(', ')}
                    type='phone'
                />
                <Input
                    placeholder='адрес'
                    getValue={(value) => setUserState((prev: IItem) => ({ ...prev, addr: value.split(', ') }))}
                    defaultValue={addr.join(', ')}
                />
                <BtnsControl>
                    <BtnControl>
                        <Button color='red' name='отмена' onClick={onClickCancel} />
                    </BtnControl>
                    <BtnControl>
                        <Button
                            disable={
                                name === '' || dob === '' || email === '' || phone.length === 0 || addr.length === 0
                            }
                            name='добавить'
                            onClick={AddUser}
                            preloader={preloadFetch}
                        />
                    </BtnControl>
                </BtnsControl>
            </Form>
            <Bg onClick={() => setAppState((prev: IAppState) => ({ ...prev, dialog: false }))}></Bg>
        </Container>
    );
};
export default AddUser;
