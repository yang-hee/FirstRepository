// 서브 리듀서들을 하나로 모아주기!

import { boardsReducer } from "../slices/boardsSlice";
import { loggerReducer } from "../slices/loggerSlice";
import { modalReducer } from "../slices/modalSlice";
import { userReducer } from "../slices/userSlice";

const reducer = {
    logger: loggerReducer,
    boards: boardsReducer,
    modal: modalReducer,
    user: userReducer

}

export default reducer;