import { Component } from "react"
// 클래스 생성시 extends를 사용하여 Component라는 클래스로부터 상속받는다!
class ClassCom extends Component{
    // render => 화면에 그림을 그려준다.
    render(){
        return(
            <div>
                클래스형 컴포넌트 입니다.
            </div>
        )
    }
}

// 외부에서 사용할 수 있도록 export 해준다.
export default ClassCom;

