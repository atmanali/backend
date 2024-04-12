import { Id } from './GlobalModel';

export type UserModel = {
    username: string;
    first_name: string;
    last_name: string;
    role: Id;
    class_id: Id;
    birth_day?: Date;
}