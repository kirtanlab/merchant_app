import {combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import marketReducer from './market/marketReducer';
import authReducer from './auth/authReducer';
import tabReducer from './tab/tabReducer';
import newproperty_reducer from './Newproperty/newproperty_reducer';
import Newrooms_reducer from './NewRooms/Newrooms_reducer';
// import storage from 'redux-persist/lib/storage';
// const persistConfig = {
//   key: 'persist-store',
//   storage: AsyncStorage,
// };

const rootReducer = combineReducers({
  authReducer,
  marketReducer,
  newproperty_reducer,
  tabReducer,
  Newrooms_reducer,
});
// const _persistedReducer = persistReducer(persistConfig, rootReducer);
export default rootReducer;
