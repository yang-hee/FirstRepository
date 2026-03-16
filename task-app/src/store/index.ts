import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer";

// redux store 생성 -> 어떤 컴포넌트에서든 사용하기 위해 최상단 태그로 감싸줘야한다!!!
const store = configureStore({
    reducer
})

// 타입 리턴
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store