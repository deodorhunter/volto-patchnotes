import { GET_PATCH_NOTES } from '../actions/getPatchNotesActions';

const initialState = {
  error: null,
  hasError: false,
  results: null,
  loading: false,
};

export const patchNotesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${GET_PATCH_NOTES}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_PATCH_NOTES}_SUCCESS`:
      return {
        ...state,
        results: action.result,
        loading: false,
      };
    case `${GET_PATCH_NOTES}_FAIL`:
      return {
        ...state,
        error: action.error,
        hasError: true,
        loading: false,
      };
    default:
      return state;
  }
};
