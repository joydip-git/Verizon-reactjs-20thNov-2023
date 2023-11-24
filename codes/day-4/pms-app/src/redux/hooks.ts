import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppState } from "./store";

//This interface allows you to easily create a hook that is properly typed for your store's root state.
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
//export const useAppDispatch: () => AppDispatch = useDispatch