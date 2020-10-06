import { CustomerOptionsData, customerUrl } from './logger';

const fetchData = async (token: string) => {
    const option = CustomerOptionsData(token);
    const customerRawData = await fetch(customerUrl, option);
    const data = await customerRawData.json();
    const items = data.items;
    return items;
};

export default fetchData;
