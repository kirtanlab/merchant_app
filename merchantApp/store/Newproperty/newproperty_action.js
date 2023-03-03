export const SET_TEST = 'SET_TEST';

export const setTest = lol => {
  //   console.log('TEST');
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: SET_TEST,
        test: lol,
      });
    } catch (err) {
      console.log('test_err', err);
    }
  };
};

export const SET_LOOKING = 'SET_LOOKING';

export const setLooking = looking_form => {
  // console.log('LOOKING'); //Paying Guest(PG) , Family Rooms , Hostel, Mess
  return async (dispatch, getState) => {
    try {
      console.log('cahge occured', looking_form);
      dispatch({
        type: SET_LOOKING,
        looking_form: looking_form,
      });
    } catch (err) {
      console.log('looking_err', err);
    }
  };
};

export const SET_GENDER = 'SET_GENDER';

export const setGender = value => {
  console.log('LOOKING', value); //Paying Guest(PG) , Family Rooms , Hostel, Mess
  return async (dispatch, getState) => {
    try {
      console.log('cahge occured', value);
      dispatch({
        type: SET_LOOKING,
        value: value,
      });
    } catch (err) {
      console.log('gender_err', err);
    }
  };
};
export const SET_AMNETIES = 'SET_AMNETIES';

export const setAmneties = value => {
  console.log('LOOKING', value); //Paying Guest(PG) , Family Rooms , Hostel, Mess
  return async (dispatch, getState) => {
    try {
      console.log('cahge occured', value);
      dispatch({
        type: SET_AMNETIES,
        value: value,
      });
    } catch (err) {
      console.log('amneties_err', err);
    }
  };
};
export const SET_TERMS_PG = 'SET_TERMS_PG';

export const setTerms_pg = value => {
  console.log('LOOKING', value); //Paying Guest(PG) , Family Rooms , Hostel, Mess
  return async (dispatch, getState) => {
    try {
      console.log('cahge occured', value);
      dispatch({
        type: SET_TERMS_PG,
        value: value,
      });
    } catch (err) {
      console.log('terms_err', err);
    }
  };
};
export const SET_ABOUT_PG = 'SET_ABOUT_PG';

export const setAbout_pg = value => {
  console.log('LOOKING', value); //Paying Guest(PG) , Family Rooms , Hostel, Mess
  return async (dispatch, getState) => {
    try {
      console.log('cahge occured', value);
      dispatch({
        type: SET_ABOUT_PG,
        value: value,
      });
    } catch (err) {
      console.log('terms_err', err);
    }
  };
};

export const SET_WHOYOU = 'SET_WHOYOU';

export const setWhoyou = whoyou => {
  // console.log('LOOKING'); //Paying Guest(PG) , Family Rooms , Hostel, Mess
  return async (dispatch, getState) => {
    try {
      console.log('cahge occured whoyou', whoyou);
      dispatch({
        type: SET_WHOYOU,
        whoyou: whoyou,
      });
    } catch (err) {
      console.log('who_you_err', err);
    }
  };
};

//Location
// SECOND_FORM
// Location Form
export const CHECKED_HOUSE_NO = 'CHECKED_HOUSE_NO';
export const CHECKED_LOCATION = 'CHECKED_LOCATION';
export const CHECKED_LANDMARK = 'CHECKED_LANDMARK';
export const CHECKED_DESCRIPTION_PG = 'CHECKED_DESCRIPTION_PG';
// Location Form
export const FOCUSED_HOUSE_NO = 'FOCUSED_HOUSE_NO';
export const FOCUSED_LOCATION = 'FOCUSED_LOCATION';
export const FOCUSED_LANDMARK = 'FOCUSED_LANDMARK';
export const FOCUSED_DESCRIPTION_PG = 'FOCUSED_DESCRIPTION_PG';

// Location Form
export const UPDATE_HOUSE_NO = 'UPDATE_HOUSE_NO';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const UPDATE_LANDMARK = 'UPDATE_LANDMARK';
export const UPDATE_DESCRIPTION_PG = 'UPDATE_DESCRIPTION_PG';

export const update_landmark = value => ({
  type: UPDATE_LANDMARK,
  value: value,
});

export const update_house_no = value => ({
  type: UPDATE_HOUSE_NO,
  value: value,
});

export const update_location = value => ({
  type: UPDATE_LOCATION,
  value: value,
});

export const update_description_pg = value => ({
  type: UPDATE_DESCRIPTION_PG,
  value: value,
});
export const focused_landmark = value => ({
  type: FOCUSED_LANDMARK,
  value: value,
});

export const focused_house_no = value => ({
  type: FOCUSED_HOUSE_NO,
  value: value,
});

export const focused_location = value => ({
  type: FOCUSED_LOCATION,
  value: value,
});

export const focused_description_pg = value => ({
  type: FOCUSED_DESCRIPTION_PG,
  value: value,
});
export const checked_house_no = value => ({
  type: CHECKED_HOUSE_NO,
  value: value,
});
export const checked_location = value => ({
  type: CHECKED_LOCATION,
  value: value,
});
export const checked_landmark = value => ({
  type: CHECKED_LANDMARK,
  value: value,
});
export const checked_description_pg = value => ({
  type: CHECKED_DESCRIPTION_PG,
  value: value,
});
