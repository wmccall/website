import produce from 'immer';
import allWords from '../../../constants/allWords';
import { SET_HOVER_CATEGORY, SET_PERMANENT_CATEGORY } from './HomeActions';

export const initialState = {
  hoverCategory: null,
  permanentCategory: null,
  allWords: allWords(),
};

export default (baseState = initialState, action) =>
  produce(baseState, draftState => {
    switch (action.type) {
      case SET_HOVER_CATEGORY:
        draftState.hoverCategory = action.category;
        return draftState;
      case SET_PERMANENT_CATEGORY:
        draftState.permanentCategory = action.category;
        return draftState;
      default:
        return draftState;
    }
  });
