import { createSlice } from "@reduxjs/toolkit";
import type { IBoard } from "../../types";

type TBoardsState = {
    modalActive: boolean;
    boardArray: IBoard[]
}

const initialState: TBoardsState = {
    modalActive: false,
    boardArray: [
        {
            boardId: 'board-0',
            boardName: '첫 번째 게시물',
            lists: [
                {
                    listId: 'list-0',
                    listName: 'list 1',
                    tasks: [
                        {
                            taskId: 'task-0',
                            taskName: 'Task 1',
                            taskDescription: 'Description',
                            taskOwner: 'yang'
                        },
                        {
                            taskId: 'task-1',
                            taskName: 'Task 2',
                            taskDescription: 'Description',
                            taskOwner: 'yang'
                        }
                    ]
                },
                {
                    listId: 'list-1',
                    listName: 'list 2',
                    tasks: [
                        {
                            taskId: 'task-2',
                            taskName: 'Task 3',
                            taskDescription: 'Description',
                            taskOwner: 'yang'
                        },
                        {
                            taskId: 'task-3',
                            taskName: 'Task 4',
                            taskDescription: 'Description',
                            taskOwner: 'yang'
                        }
                    ]
                }
            ]
        }
    ]
}

const boardsSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {

    }
})
// 서브 리듀서들을 모아서 하나로 만들어주는 과정 필요!
export const boardsReducer = boardsSlice.reducer;