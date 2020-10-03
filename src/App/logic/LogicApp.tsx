import { useEffect, useState } from 'react';
// import { OptionsData } from './logger';
import { Dummy } from '../state/Dummy';
import { formObject, IFormObject } from '../state';

export const LogicApp = () => {
    const [state, setState] = useState<any>();
    const [form, setForm] = useState<IFormObject>(formObject);

    // const url: string = `${process.env.REACT_APP_API_HOST}${process.env.REACT_APP_API_ADRESS}customer/index`;

    // const GetDataFetch = async () => {
    //     const rawData = await fetch(url, OptionsData);
    //     const data = await rawData.json();
    //     console.log(data);
    //     // .then((response) => {
    //     //     response.json();
    //     // })
    //     // .then((body) => {
    //     //     console.log('from db', body);
    //     // })
    //     // .catch((error) => {
    //     //     console.log('err', error.message);
    //     // });
    // };
    const onPressEnterSubmitAuth = (e: React.KeyboardEvent<HTMLFormElement>) => {
        const { email, password } = form;

        if (e.key === 'Enter' && (email !== '' || password !== '')) {
            console.log('fetch api', form);
            setForm(formObject);
        }
    };
    const onSubmitAuth = (e: React.FormEvent<HTMLFormElement>) => {
        const { email, password } = form;
        e.preventDefault();
        if (email !== '' || password !== '') {
            console.log('fetch api', form);
            setForm(formObject);
        }
    };

    useEffect(() => {
        setState(Dummy);
        // GetDataFetch();
        // eslint-disable-next-line
    }, []);

    return { state, onSubmitAuth, onPressEnterSubmitAuth, setForm, form };
};
