import { IItem } from './interfaces';

const d = new Date();
const mm = d.getMonth() + 1;
const dd = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
const yy = d.getFullYear();
const today = `${yy}-${mm}-${dd}`;

export const User: IItem = {
    name: '',
    dob: today,
    phone: [],
    email: [],
    addr: [],
    branch_ids: [1],
    legal_type: 1,
    is_study: 0,
};
