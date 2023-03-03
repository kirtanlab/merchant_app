import AsyncStorage from '@react-native-async-storage/async-storage';
import * as newproperty_actions from './newproperty_action';
let initialState = {
  looking_form: {
    pg: false,
    mess: false,
    rent: true,
    Hostel: false,
  },
  who: {
    landowner: false,
    Broker: false,
    owner: true,
  },
  gender: {
    male: true,
    female: false,
    both: false,
  },
  amneties: {
    wifi: false,
    AC: false,
    hotwater: false,
    cooler: false,
  },
  about_pg: '',
  terms_pg: [],
  //Location Form
  house_no: '',
  Location: '',
  Landmark: '',
  Description_pg: '',
  checked_house_no: false,
  checked_Location: false,
  checked_Landmark: false,
  checked_Description_pg: false,
  focused_house_no: false,
  focused_Location: false,
  focused_Landmark: false,
  focused_Description_pg: false,
};

const newproperty_reducer = (state = initialState, action) => {
  switch (action.type) {
    //about_pg
    case newproperty_actions.SET_ABOUT_PG:
      return {
        ...state,
        about_pg: action.value,
      };
    //terms_pg
    case newproperty_actions.SET_TERMS_PG:
      return {
        ...state,
        terms_pg: action.value,
      };
    //amneties
    case newproperty_actions.SET_AMNETIES:
      return {
        ...state,
        amneties: action.value,
      };
    //gender
    case newproperty_actions.SET_GENDER:
      return {
        ...state,
        gender: action.value,
      };
    //Location Form
    case newproperty_actions.CHECKED_DESCRIPTION_PG:
      return {
        ...state,
        checked_Description_pg: action.value,
      };
    case newproperty_actions.CHECKED_HOUSE_NO:
      return {
        ...state,
        checked_house_no: action.value,
      };
    case newproperty_actions.CHECKED_LANDMARK:
      return {
        ...state,
        checked_Landmark: action.value,
      };
    case newproperty_actions.CHECKED_LOCATION:
      return {
        ...state,
        checked_Location: action.value,
      };
    case newproperty_actions.FOCUSED_DESCRIPTION_PG:
      return {
        ...state,
        focused_Description_pg: action.value,
      };
    case newproperty_actions.FOCUSED_HOUSE_NO:
      return {
        ...state,
        focused_house_no: action.value,
      };
    case newproperty_actions.FOCUSED_LANDMARK:
      return {
        ...state,
        focused_Landmark: action.value,
      };
    case newproperty_actions.FOCUSED_LOCATION:
      return {
        ...state,
        focused_Location: action.value,
      };
    case newproperty_actions.UPDATE_DESCRIPTION_PG:
      return {
        ...state,
        Description_pg: action.value,
      };
    case newproperty_actions.UPDATE_HOUSE_NO:
      return {
        ...state,
        house_no: action.value,
      };
    case newproperty_actions.UPDATE_LANDMARK:
      return {
        ...state,
        Landmark: action.value,
      };
    case newproperty_actions.UPDATE_LOCATION:
      return {
        ...state,
        Location: action.value,
      };

    case newproperty_actions.SET_LOOKING:
      return {
        ...state,
        looking_form: action.looking_form,
      };
    case newproperty_actions.SET_WHOYOU:
      return {
        ...state,
        who: action.whoyou,
      };

    case newproperty_actions.SET_TEST:
      return {
        ...state,
        new_test: action.test,
      };
    default:
      return state;
  }
};
export default newproperty_reducer;
