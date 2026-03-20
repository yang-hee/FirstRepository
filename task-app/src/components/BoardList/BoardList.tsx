import React, { useState } from 'react'
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import SideForm from './SideForm/SideForm';
import { FiLogIn, FiPlusCircle } from 'react-icons/fi';
import { GoSignOut } from 'react-icons/go'
import { addButton, addSection, boardItem, boardItemActive, container, title } from './BoardList.css';
import clsx from 'clsx';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import { app } from '../../firebase';
import { removeUser, setUser } from '../../store/slices/userSlice';
import { useAuth } from '../../hooks/useAuth';

type TBoardListProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>
}

const BoardList = ({activeBoardId, setActiveBoardId}: TBoardListProps) => {
const { boardArray} = useTypedSelector(state => state.boards)
const [isFormOpen, setIsFormOpen] = useState(false);
// const inputRef = useRef<HTMLInputElement>(null);
const auth = getAuth(app)
const provider = new GoogleAuthProvider
const dispatch = useTypedDispatch();

// 로그인 여부
const {isAuth} = useAuth();

const handleClick = () => {
  setIsFormOpen(!isFormOpen)
  // 
  // setTimeout(() => {
    // inputRef.current?.focus();
  // }, 0)
}

const handleLogin = () => {
  // 팝업으로 로그인 인증흐름을 진행
  signInWithPopup(auth, provider)
  // 팝업으로 로그인 끝난 후 진행 할 것들
  // 로그인 한 정보가 userCredential로 들어온다.
  .then(userCredential =>{
    // redux store에 저장 후 전역으로 사용
    dispatch(
      // 성공했을 경우 store에 유저 셋팅
      setUser({
        email: userCredential.user.email,
        id: userCredential.user.uid
      })
    )
  })
    // 에러 발생 시
  .catch((error) => {
    console.error(error);
  })
}

// store에서 유저 정보 제거 -> 로그아웃
const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      dispatch(
        removeUser()
      )
    })
    .catch((error) => {
      console.error(error);
    })
}

  return (
    <div className={container}>
      <div className={title}>
        게시판: 
      </div>
      {boardArray.map((board, index) => (
        <div 
          key={board.boardId} 
          onClick={() => setActiveBoardId(boardArray[index].boardId)}
          className={
            clsx(
              {
                [boardItemActive]:
                boardArray.findIndex(b => b.boardId === activeBoardId) === index,
              },
              {
                [boardItem]:
                boardArray.findIndex(b => b.boardId === activeBoardId) !== index
              }
            )
          }>
            {board.boardName}
        </div>
      ))}
      <div className={addSection}>
        {
          isFormOpen ?
            <SideForm setIsFormOpen={setIsFormOpen}/>
          :
            <FiPlusCircle className={addButton} onClick={handleClick} />
        }
        {
          isAuth ?
            <GoSignOut className={addButton} onClick={handleSignOut} />
          :
            <FiLogIn className={addButton} onClick={handleLogin} />
        }
      </div>
    </div>
  )
}

export default BoardList