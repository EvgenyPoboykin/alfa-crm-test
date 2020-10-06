import { LoginOptionsData, loginUrl } from './logger';

const fetchToken = async (email: string, password: string) => {
    const option: any = LoginOptionsData(email, password);

    const rawData = await fetch(loginUrl, option);
    const data = await rawData.json();

    const token = data.token;

    return token;
};

export default fetchToken;
