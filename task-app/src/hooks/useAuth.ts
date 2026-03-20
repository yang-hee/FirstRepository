import { useTypedSelector } from "./redux"

// redux store에 있는 user에 대한 값을 가져오기!
export function useAuth() {
    
    const {id, email} = useTypedSelector((state) => state.user)
    return {
        // email 값이 있으면 true -> !!(true) -> !(false)
        isAuth: !!email,
        email,
        id
    }
}
