export type PermissionModel = {
    id: number;
    role_id: string;
    collection: string;
    action: string;
    permissions: {};
    validation: {};
    presets: {};
    fields: string;
}