import {useSelector, TypedUseSelectorHook} from 'react-redux';
import { RootState } from '../store/reducers/combineReducers';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector; //disp