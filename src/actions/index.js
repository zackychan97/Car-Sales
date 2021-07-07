export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_TOTAL = "ADD_TOTAL";

export const addFeature = item => ({
  type: ADD_FEATURE,
  payload: item
});

export const removeFeature = item => ({
  type: REMOVE_FEATURE,
  payload: item
});

export const addTotal = item => ({
  type: ADD_TOTAL,
  payload: item
});