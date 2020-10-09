import { LoginOptionsData, loginUrl } from './logger';

export const fetchToken = async (email: string, password: string) => {
    const option: any = LoginOptionsData(email, password);

    const rawData = await fetch(loginUrl, option);
    const data = await rawData.json();

    const token = data.token;

    return token;
};
