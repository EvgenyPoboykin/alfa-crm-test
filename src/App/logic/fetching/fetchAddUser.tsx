import { CreateCustomerOptionsData, createUrl } from './logger';

export const fetchAddUser = async (token: string, user: any) => {
    const option: any = CreateCustomerOptionsData(token, user);

    const rawData = await fetch(createUrl, option);
    const data = await rawData.json();

    return data;
};
