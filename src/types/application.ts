
interface Application {
    id: string;
    name: string;
    amount: number;
    creditScore: number;
    submittedAt: Date;
    status: 'Pending' | 'Approved' | 'Rejected';
    plusIncome: boolean;
    employment: boolean;
    houseingPayment: boolean;
}