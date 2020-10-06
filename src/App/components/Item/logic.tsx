const LogicItem = (e_date: string, b_date: string) => {
    const DAY = 86400000;
    const now = new Date();
    const deactivate_date = new Date(e_date);
    const registration_date = new Date(b_date);

    const ColoredBgItem = () => {
        if (deactivate_date.getTime() < now.getTime()) {
            return 3;
        } else if (now.getTime() < registration_date.getTime() + DAY) {
            return 2;
        } else {
            return 1;
        }
    };

    return { ColoredBgItem };
};
export default LogicItem;
