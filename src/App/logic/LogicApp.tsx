import { useEffect, useState } from 'react';
import { Dummy } from '../state/Dummy';

export const LogicApp = () => {
    const [state, setState] = useState<any>();

    useEffect(() => {
        setState(Dummy);

        // eslint-disable-next-line
    }, []);

    console.log(state);

    return { state };
};

// const url: string = 'https://test.s20.online/v2api/customer/index';

// const data: {} = {
//     'X-ALFACRM-TOKEN': 'c9b4e671abd208e8f9ac613d635fa152',
//     'Content-Type': 'application/json',
// };

// const options: {} = {
//     mode: 'no-cors',
//     header: data,
//     method: 'POST',
// };

// const GetDataFetch = async () => {
//     await fetch(url, options)
//         .then((response) => {
//             console.log(response.json());
//         })
//         .catch((error) => {
//             console.log('err', error.message);
//         });
// };

// GetDataFetch();
