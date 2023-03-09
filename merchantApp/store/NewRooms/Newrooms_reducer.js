import * as Newrooms_Actions from './Newrooms_actions';
let initialState = {
  AC: false,
  title_no: 1,
  attached: false,
  price: 5400,
  extra_description: '',
  terms_property: '',
  about_property: '',
  about_room: '',
  baseTerms: {
    govt: false,
    myApp: false,
  },
  totalRooms: 1,
  occupancy: 1,
  checked_base_terms: false,
  checked_ac: false,
  checked_title_no: false,
  checked_attached: false,
  checked_price: false,
  checked_attached: false,
  checked_totalRooms: false,
  checked_occupancy: false,
  focused_title_no: false,
  focused_attached: false,
  focused_price: false,
  focused_totalRooms: false,
  focused_occpancy: false,
};
const newRoom_reducer = (state = initialState, action) => {
  switch (action.type) {
    //NewRooms Form
    case Newrooms_Actions.UPDATE_OCCUPANCY:
      return {
        ...state,
        occupancy: action.value,
      };
    case Newrooms_Actions.UPDATE_TOTAL_AVAILABLE:
      return {
        ...state,
        totalRooms: action.value,
      };
    case Newrooms_Actions.CHECKED_OCCUPANCY:
      return {
        ...state,
        checked_occupancy: action.value,
      };
    case Newrooms_Actions.CHECKED_TOTAL_AVAILABLE:
      return {
        ...state,
        checked_totalRooms: action.value,
      };
    case Newrooms_Actions.FOCUSED_OCCUPANCY:
      return {
        ...state,
        focused_occpancy: action.value,
      };
    case Newrooms_Actions.FOCUSED_TOTAL_AVAILABLE:
      return {
        ...state,
        focused_totalRooms: action.value,
      };

    case Newrooms_Actions.UPDATE_BASE_TERMS:
      return {
        ...state,
        baseTerms: action.value,
      };
    case Newrooms_Actions.CHECKED_BASE_TERMS:
      return {
        ...state,
        checked_base_terms: action.value,
      };
    case Newrooms_Actions.UPDATE_EXTRA_DESCRIPTORS:
      return {
        ...state,
        extra_description: action.value,
      };
    case Newrooms_Actions.CHECKED_ATTACHED:
      return {
        ...state,
        checked_attached: action.value,
      };
    case Newrooms_Actions.CHECKED_AC:
      return {
        ...state,
        checked_ac: action.value,
      };
    case Newrooms_Actions.CHECKED_title:
      return {
        ...state,
        checked_title_no: action.value,
      };
    case Newrooms_Actions.CHECKED_PRICES:
      return {
        ...state,
        checked_price: action.value,
      };
    case Newrooms_Actions.FOCUSED_AC:
      return {
        ...state,
        focused_ac: action.value,
      };
    case Newrooms_Actions.FOCUSED_title:
      return {
        ...state,
        focused_title_no: action.value,
      };
    case Newrooms_Actions.FOCUSED_PRICES:
      return {
        ...state,
        focused_price: action.value,
      };
    case Newrooms_Actions.FOCUSED_ATTACHED:
      return {
        ...state,
        focused_attached: action.value,
      };
    case Newrooms_Actions.UPDATE_PRICES:
      return {
        ...state,
        price: action.value,
      };
    case Newrooms_Actions.UPDATE_AC:
      return {
        ...state,
        AC: action.value,
      };
    case Newrooms_Actions.UPDATE_title:
      return {
        ...state,
        title_no: action.value,
      };
    case Newrooms_Actions.UPDATE_ATTACHED:
      return {
        ...state,
        attached: action.value,
      };
    default:
      return state;
  }
};
export default newRoom_reducer;
