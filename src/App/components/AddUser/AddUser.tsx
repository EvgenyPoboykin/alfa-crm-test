import React, { lazy, memo, useContext } from 'react';
import { ContextApp, IAppState, IItem } from '../../state';
import { IAddUser } from './interfaces';

const Container = lazy(() => import('./style').then((mod) => ({ default: mod.Container })));
const Bg = lazy(() => import('./style').then((mod) => ({ default: mod.Bg })));
const Form = lazy(() => import('./style').then((mod) => ({ default: mod.Form })));
const FormName = lazy(() => import('./style').then((mod) => ({ default: mod.FormName })));
const BtnsControl = lazy(() => import('./style').then((mod) => ({ default: mod.BtnsControl })));
const BtnControl = lazy(() => import('./style').then((mod) => ({ default: mod.BtnControl })));

const Input = lazy(() => import('../Input'));
const Button = lazy(() => import('../Button'));

const AddUser: React.FC<IAddUser> = memo(() => {
    const {
        appstate: { dialog },
        userstate: { name, dob, email, phone, addr },
        setUserState,
        setAppState,
        AddUser,
        onClickCancel,
    } = useContext(ContextApp);
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
                    defaultValue={email}
                    type='email'
                />
                <Input
                    placeholder='телефон'
                    getValue={(value) => setUserState((prev: IItem) => ({ ...prev, phone: value.split(', ') }))}
                    defaultValue={phone.join(', ')}
                />
                <Input
                    placeholder='адрес'
                    getValue={(value) => setUserState((prev: IItem) => ({ ...prev, addr: value.split(', ') }))}
                    defaultValue={addr}
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
                        />
                    </BtnControl>
                </BtnsControl>
            </Form>
            <Bg onClick={() => setAppState((prev: IAppState) => ({ ...prev, dialog: false }))}></Bg>
        </Container>
    );
});
export default AddUser;
