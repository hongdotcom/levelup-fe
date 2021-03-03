import { FACEBOOK_OAUTH2 } from "../Types/constants";

const initialState = [];

export const facebookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FACEBOOK_OAUTH2: {
      return action.facebbookesponse;
    }
    default:
      return state;
  }
};
