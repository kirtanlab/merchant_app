export const UPDATE_FLOOR = 'UPDATE_FLOOR';
export const UPDATE_AC = 'UPDATE_AC';
export const UPDATE_ATTACHED = 'UPDATE_ATTACHED';
export const UPDATE_PRICES = 'UPDATE_PRICES';
export const UPDATE_EXTRA_DESCRIPTORS = 'UPDATE_EXTRA_DESCRIPTORS';
export const UPDATE_BASE_TERMS = 'UPDATE_BASE_TERMS';

export const CHECKED_FLOOR = 'CHECKED_FLOOR';
export const CHECKED_AC = 'CHECKED_AC';
export const CHECKED_ATTACHED = 'CHECKED_ATTACHED';
export const CHECKED_PRICES = 'CHECKED_PRICES';
export const CHECKED_BASE_TERMS = 'CHECKED_BASE_TERMS';

export const FOCUSED_FLOOR = 'FOCUSED_FLOOR';
export const FOCUSED_AC = 'FOCUSED_AC';
export const FOCUSED_ATTACHED = 'FOCUSED_ATTACHED';
export const FOCUSED_PRICES = 'FOCUSED_PRICES';

export const updateBaseTerms = value => {
  return {
    type: UPDATE_BASE_TERMS,
    value: value,
  };
};
export const checkedBaseTerms = value => {
  console.log('main', value);
  return {
    type: CHECKED_BASE_TERMS,
    value: value,
  };
};

export const updateExtraDescription = value => ({
  type: UPDATE_EXTRA_DESCRIPTORS,
  value: value,
});

export const udpateAttached = value => ({
  type: UPDATE_ATTACHED,
  value: value,
});
export const updateFloor = value => ({
  type: UPDATE_FLOOR,
  value: value,
});
export const updateAC = value => ({
  type: UPDATE_AC,
  value: value,
});
export const updatePrices = value => ({
  type: UPDATE_PRICES,
  value: value,
});

export const checkedFloor = value => ({
  type: CHECKED_FLOOR,
  value: value,
});
export const checkedAC = value => ({
  type: CHECKED_AC,
  value: value,
});
export const checkedAttached = value => ({
  type: CHECKED_ATTACHED,
  value: value,
});
export const checkedPrices = value => ({
  type: CHECKED_PRICES,
  value: value,
});

export const focusedFloor = value => ({
  type: FOCUSED_FLOOR,
  value: value,
});
export const focusedAC = value => ({
  type: FOCUSED_AC,
  value: value,
});
export const focusedAttached = value => ({
  type: FOCUSED_ATTACHED,
  value: value,
});
export const focusedPrices = value => ({
  type: FOCUSED_PRICES,
  value: value,
});
