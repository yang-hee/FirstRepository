import React, {Component} from "react";
// import { Component } from "react";


// 넘어오는 props에 대한 타입도 설정을 해줘야한다.
interface Weather{
    weather: string;
    children : React.ReactNode;
}
// 구조분해할당 사용!
const MyWeather : React.FC<Weather> = ({children, weather}) => {
    // const {children, weather} = props
    return(
        <div>
            {/* 해당 컴포넌트 태그 내의 내용 -> children */}
            {children}<p/>
            오늘의 날씨는 {weather} 입니다.
        </div>
    )
}

// class MyWeather extends Component<Weather>{
//     render(){
//         // class 컴포넌트에서 props를 넘겨받는 법!
//         const {children, weather} = this.props;
//         return(
//             <div>
//                 {children}<p/>
//                 오늘의 날씨는 {weather}입니다.
//             </div>
//         )
//     }
// }

export default MyWeather