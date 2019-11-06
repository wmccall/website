import produce from 'immer';
import allWords from '../../constants/allWords';
import {
  SET_HOVER_CATEGORY,
  SET_PERMANENT_CATEGORY,
  GO_FORWARD_PAGE,
  GO_BACK_PAGE,
  GO_HOME,
  SET_CURRENT_TAG,
  SET_CURRENT_WORD,
} from './ViewsActions';

export const initialState = {
  pageSequence: [{ page: 'home', tag: null, tagType: null, word: null }],
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
      case GO_FORWARD_PAGE:
        draftState.page = action.page;
        draftState.pageSequence.push({
          page: action.page,
          tag: action.tag,
          tagType: action.tagType,
          word: action.word,
        });
        draftState.pageDepth += 1;
        return draftState;
      case GO_BACK_PAGE:
        draftState.pageSequence.pop();
        return draftState;
      case GO_HOME:
        draftState.pageSequence = initialState.pageSequence;
        return draftState;
      case SET_CURRENT_WORD:
        draftState.word = action.word;
        return draftState;
      case SET_CURRENT_TAG:
        draftState.tag = action.tag;
        draftState.tagType = action.tagType;
        return draftState;
      default:
        return draftState;
    }
  });
