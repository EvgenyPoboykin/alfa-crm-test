export const OptionsData: any = {
    mode: 'no-cors',
    header: {
        'X-ALFACRM-TOKEN': `${process.env.REACT_APP_API_TOKEN}`,
        'Content-Type': 'application/json; charset=UTF-8',
    },
    method: 'POST',
    credentials: 'include',
};
