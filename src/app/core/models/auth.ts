export interface User {
    id: number;
    email?: string;
    telephone?: string;
    password: string;
    firstName: string;
    lastName: string;
    token?: string;
}
