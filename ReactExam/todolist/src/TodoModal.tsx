type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
}

type TodoModalProps = {
    show: boolean;
    todo: Todo | null;
    handleClose : () => void;

}

const TodoModal : React.FC<TodoModalProps> = ({show, todo, handleClose}) => {
    if(!show) return null;

    return (
        <div>
            <div className="modal show d-block" id="todoModal" tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Todo 상세 정보</h5>
                            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* ? 옵셔널 체이닝 -> todo에 값이 없는 경우 undefined 리턴 */}
                            <p>{todo?.text}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoModal