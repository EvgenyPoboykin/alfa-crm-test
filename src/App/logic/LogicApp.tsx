import { useEffect, useState } from 'react';
// import { OptionsData } from './logger';
import { Dummy } from '../state/Dummy';

export const LogicApp = () => {
    const [state, setState] = useState<any>();

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

    useEffect(() => {
        setState(Dummy);
        // GetDataFetch();
        // eslint-disable-next-line
    }, []);

    console.log(state);

    return { state };
};
