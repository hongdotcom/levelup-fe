import { FACEBOOK_OAUTH2 } from "../Types/constants";

export const facebookOAuth2 = (facebookResponse) => {
  return async (dispatch) => {
    if (typeof facebookResponse === "undefined") {
      facebookResponse = [];
    }

    dispatch({ type: FACEBOOK_OAUTH2, facebookResponse });
  };
};
