import { useState } from "react";

const Timer : React.FC = () => {
    const [seconds, setSeconds] = useState<number>(0);
    return(
        <div>
            <h2>타이머 : {seconds}초</h2>
            <button onClick={
                () => {
                    // 타이머 동작 함수 setInterval(콜백함수, 주기)
                    setInterval(() => {
                        setSeconds((prev) => prev + 1)
                    }, 1000)   // 1000 => 1초!
                }
            }>시작</button>
        </div>
    )
}
export default Timer;