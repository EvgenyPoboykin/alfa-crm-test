export interface IProvider {
    children: React.ReactNode;
    value: any;
}

export interface IItem {
    id: number;
    branch_ids: any[];
    teacher_ids: any[];
    name: string;
    barcode: string;
    color: any | null;
    is_study: number;
    study_status_id: any | null;
    lead_status_id: any | null;
    lead_reject_id: any | null;
    lead_source_id: any | null;
    assigned_id: any | null;
    legal_type: number;
    legal_name: string;
    company_id: any | null;
    dob: string;
    balance: string;
    balance_base: string;
    paid_count: number;
    next_lesson_date: any | null;
    paid_till: any | null;
    last_attend_date: any | null;
    b_date: string;
    e_date: string;
    note: string;
    paid_lesson_count: number;
    paid_lesson_date: any;
    phone: any[];
    email: any[];
    web: any[];
    addr: any[];
    custom_foto: any | null;
    custom_nomerkvitantsii: any | null;
    custom_pervyykontakt: any | null;
    custom_klassshkoly: string | null;
    custom_predmeta: string | null;
    custom_vyborpredmeta: string | null;
    custom_lokatsiyafilial: string | null;
}

export interface IData {
    total: number;
    count: number;
    page: number;
    items: IItem[];
}
