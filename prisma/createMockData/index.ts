import { createRoles } from './createRoles';
import { createClasses } from './createClasses';
import { createUsers } from './createUsers';
import { createAuthentication } from './createAuthentication';

const createMockDate = async () => {
    console.log('## createMock');
    await createRoles();
    await createClasses()
    await createAuthentication();
    await createUsers();
}

export default createMockDate;