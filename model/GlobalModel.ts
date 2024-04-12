export type Id = string|number;

export type GlobalModel = {
    id: Id;
    date_created?: Date;
    date_updated?: Date
    user_crated?: Id;
    user_updated?: Id;
}