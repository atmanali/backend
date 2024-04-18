import { Id } from './GlobalModel';

export type FileModel = {
    id: number;
    name: string;
    file_size: number;
    mime_type: string;
    blob: string;
    description: string;
    status: 'visible' | 'hidden' | 'deleted';
    formatted_name?: string;
    modified_on?: Date;
    modified_by?: Id;
    date_created?: Date;
    date_updated?: Date
    user_crated?: Id;
    user_updated?: Id;
}

const status = {
    visible: 'visible by all users',
    deleted: 'visible by admin and user_admin only',
    hidden: 'visible by admin only',
}