import React, { useContext } from 'react';
import { ContextApp, IAppState, IItem } from '../../state';
import { IAddUser } from './interfaces';
import { Container, Form, FormName, BtnControl, BtnsControl, Bg } from './style';
import Input from '../Input';
import Button from '../Button';

const AddUser: React.FC<IAddUser> = () => {
    const {
        app_state: { dialog },
        user_state: { name, dob, email, phone, addr },
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
                        />
                    </BtnControl>
                </BtnsControl>
            </Form>
            <Bg onClick={() => setAppState((prev: IAppState) => ({ ...prev, dialog: false }))}></Bg>
        </Container>
    );
};
export default AddUser;
