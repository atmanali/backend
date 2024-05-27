import { getAuthentication } from './get';
import { getUser } from '../users/get';

export const login = async (username: string, password: string) => {
    try {
        const authenticated = await getAuthentication(username, password);
        const user = authenticated ? await getUser(username) : undefined;

        return authenticated
            ? user
                ? 'connected'
                : 'redirect'
            : 'not authenticated'
    } catch (error) {
        console.log(error);
        return 'error'
    }
}