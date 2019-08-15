import produce from 'immer';
import allWords from '../../constants/allWords';
import {
  SET_HOVER_CATEGORY,
  SET_PERMANENT_CATEGORY,
  SET_CURRENT_PAGE,
  SET_CURRENT_TAG,
} from './ViewsActions';

export const initialState = {
  page: 'home',
  tag: null,
  tagType: null,
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
      case SET_CURRENT_PAGE:
        draftState.page = action.page;
        return draftState;
      case SET_CURRENT_TAG:
        draftState.tag = action.tag;
        draftState.tagType = action.tagType;
        return draftState;
      default:
        return draftState;
    }
  });
