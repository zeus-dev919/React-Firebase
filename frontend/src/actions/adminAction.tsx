import { ADMIN_TYPES } from "./actionType";

const setDate = (data: any) => {
  const type = ADMIN_TYPES.CALENDAR_DATE;

  return { type, payload: data };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    setDate
}
