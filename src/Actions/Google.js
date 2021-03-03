import { GOOGLE_OAUTH2 } from "../Types/constants";

export const googleOAuth2 = (googleResponse) => {
  return async (dispatch) => {
    if (typeof googleResponse === "undefined") {
      googleResponse = [];
    }

    dispatch({ type: GOOGLE_OAUTH2, googleResponse });
  };
};
