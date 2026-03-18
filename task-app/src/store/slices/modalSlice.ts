import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ITask } from '../../types';

type TModalState = {
    boardId: string;
    listId: string;
    task: ITask;
}

type TSetModalDataAction = {
    boardId: string;
    listId: string;
    task: ITask;
}

const initialState: TModalState = {
    boardId: "board-0",
    listId: "list-0",
    task: {
        taskId: "task-0",
        taskName: "task 0",
        taskDescription: "task description",
        taskOwner: "yang"
    }
}

const modalSlice = createSlice({
    name: 'modal', // 슬라이스의 이름
    initialState,  // 초기 상태
    reducers: {    // 액션 생성 함수
        setModalData: (state, {payload}: PayloadAction<TSetModalDataAction>) => {
            state.boardId = payload.boardId;
            state.listId = payload.listId;
            state.task = payload.task;
        }
    }
})

export const {setModalData} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;