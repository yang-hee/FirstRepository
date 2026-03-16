import type { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch = () => useDispatch<AppDispatch>();
// const dispatch = useDispatch();
// const logger = useSelector((state: RootState) => state.logger)

// typescript는 state 추론 못함 -> 개발자가 타입을 지정해줘야 한다.
// store 객체를 사용하여 
// const logger = useSelector(state => state.logger)
