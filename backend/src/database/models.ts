export type UserRole = 'ADMIN' | 'USER'


export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    role: UserRole;
    createDate: Date;
    updateDate: Date;
}