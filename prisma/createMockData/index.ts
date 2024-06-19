import { createMockRoles } from "./createMockRoles";
import { createMockClasses } from "./createMockClasses";
import { createMockUsers } from "./createMockUsers";

const createMockData = async () => {
  return {
    classes: await createMockClasses(),
    roles: await createMockRoles(),
    users: await createMockUsers(),
  };
};

export default createMockData;
