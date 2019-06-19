import { SWITCH_PAGES } from "redux/types";

export const switchPages = activePage => {
  return {
    type: SWITCH_PAGES,
    payload: activePage
  };
};
