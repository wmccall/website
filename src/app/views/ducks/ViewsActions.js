export const SET_HOVER_CATEGORY = 'SET_HOVER_CATEGORY';
export const SET_PERMANENT_CATEGORY = 'SET_PERMANENT_CATEGORY';
export const GO_FORWARD_PAGE = 'GO_FORWARD_PAGE';
export const GO_BACK_PAGE = 'GO_BACK_PAGE';
export const GO_HOME = 'GO_HOME';
export const SET_CURRENT_TAG = 'SET_CURRENT_TAG';
export const SET_CURRENT_WORD = 'SET_CURRENT_WORD';

export const goForwardPage = (
  page,
  tag = null,
  tagType = null,
  word = null,
) => ({
  type: GO_FORWARD_PAGE,
  page,
  tag,
  tagType,
  word,
});

export const goBackPage = () => ({
  type: GO_BACK_PAGE,
});

export const goHome = () => ({
  type: GO_HOME,
});

export const setHoverCategory = category => ({
  type: SET_HOVER_CATEGORY,
  category,
});
export const setPermanentCategory = category => ({
  type: SET_PERMANENT_CATEGORY,
  category,
});
