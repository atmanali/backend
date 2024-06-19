import { deleteUsers } from "./deleteUsers";
import { deleteClasses } from "./deleteClasses";
import { deleteRoles } from "./deleteRoles";

const deleteMockData = async () => {
  return {
    users: await deleteUsers(),
    classes: await deleteClasses(),
    roles: await deleteRoles(),
  };
};

export default deleteMockData;
