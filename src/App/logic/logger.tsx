export const loginUrl: string = `${process.env.REACT_APP_API_HOST}${process.env.REACT_APP_API_ADDRESS}auth/login`;
export const customerUrl: string = `${process.env.REACT_APP_API_HOST}${process.env.REACT_APP_API_ADDRESS}customer/index`;
export const createUrl: string = `${process.env.REACT_APP_API_HOST}${process.env.REACT_APP_API_ADDRESS}customer/create`;

export const LoginOptionsData = (email: string, password: string) => {
    return {
        method: 'POST',
        body: JSON.stringify({ email: email, api_key: password }),
    };
};
export const CustomerOptionsData = (token: string) => {
    return { method: 'POST', headers: { 'X-ALFACRM-TOKEN': token } };
};
export const CreateCustomerOptionsData = (token: string, data: any) => {
    return { method: 'POST', headers: { 'X-ALFACRM-TOKEN': token }, body: JSON.stringify(data) };
};
