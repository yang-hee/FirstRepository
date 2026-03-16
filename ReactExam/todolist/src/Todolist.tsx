import { useState } from "react";
import TodoModal from "./TodoModal";
// type은 기존의 타입들을 사용해서 새로운 타입을 만들때!
// interface는 객체의 구조를 정의할때 사용!
type Todo = {
    id: number;
    text : string;
    isChecked : boolean;
}

const TodoList: React.FC = () => {
    const title: string = "오늘 할 일";

    // todos의 기본값을 공부하기로 셋팅!
    // const [todos] = useState('공부하기');
    // 여러개의 데이터가 있을때 하나씩 만들어 주는 건 비효율적! 배열로 묶어주기
    // const [todos2] = useState('잠자기');
    const [todos, setTodos] = useState<Todo[]>([
        {id: 0, text: '공부하기', isChecked: false},
        {id: 1, text: '잠자기', isChecked: false}, 
        {id: 2, text: '회의하기', isChecked: false}
    ])

    const [newTodo, setNewTodo] = useState<string>('')
    // 상세 정보 모달을 띄울지 말지 여부! 기본적으로 안보여야되니까 false
    const [showDetail, setShowDetail] = useState<boolean>(false);
    // 상세 정보를 보고싶은.. 선택된 투두
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    const handleCheckedChange = (itemId : number) => {
        setTodos((prevItems) =>
            // 이벤트가 발생한 아이디일때만 isChecked에 변화를 주고 아닐경우 값 그대로 유지!
            prevItems.map((item) => 
                item.id === itemId ? { ...item, isChecked : !item.isChecked} : item
            )
        )
    }

    const addTodo = () => {
        // 아무것도 입력안했을 때! 공백값 입력 방지해야함
        // 변화가 일어나지 않았을 때 방지!
        if(newTodo.trim() !== ''){
            // 기존의 데이터 ...todos에 새로운 데이터 추가
            // ...todos => 스프레드 연산자 : 원본 배열은 유지하고 새로운 배열 생성!
            setTodos([...todos, {id: Date.now(), text: newTodo, isChecked:false}])
            // 값 등록 후 입력값 초기화
            setNewTodo('');

        }
    }

    // 상세 정보 -> 모달
    const handleTodoClick = (item: Todo) => {
        setShowDetail(true);
        setSelectedTodo(item);
    }
    // 상세 정보 종료 시 모달창 끄기!
    const handleCloseDetail = () => {
        setShowDetail(false);
    }

    const removeTodo = (itemId : number) => {
        // filter를 통해 아이템이 일치하는 것을 제외한 목록만 todos에 저장한다.
        setTodos(todos.filter((todo) => todo.id !== itemId))
    }

    
    return(
        <div>
            <div className="container">
                <h1>{title}</h1>
                {/* 단락을 나눠주는 p태그! */}
                <p/>
            </div>
            <div className = "board">
                {/* 새로운 할일 추가 */}
                <div>
                    <input 
                        type = "text"
                        placeholder="할일 입력"
                        style={{marginRight: '10px', writingMode: 'horizontal-tb'}}
                        //  입력하여 변화가 생기면? e.target.value에 입력값을 갖고있다! -> 버튼 입력시엔 todolist에 추가되도록 추가 조치
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <button 
                        type="button" 
                        className="btn btn-success" 
                        // 버튼 클릭 시 input에 들어있는 (newTodo)의 값을 Todolist에 등록
                        onClick={addTodo}
                    >
                        추가
                    </button>
                </div>
                <p/>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            <input 
                                type="checkbox"
                                // 변화 발생 시 발생하는 이벤트 
                                onChange={() => {
                                    handleCheckedChange(todo.id);
                                }}
                            />
                            <span onClick={() => handleTodoClick(todo)}>
                                {todo.isChecked ? <del>{todo.text}</del> : <span>{todo.text}</span>}
                            </span>
                            <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick = {() => removeTodo(todo.id)}
                            >
                                삭제
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <TodoModal show={showDetail} todo={selectedTodo} handleClose={handleCloseDetail}/>
        </div>
    )
}

export default TodoList;