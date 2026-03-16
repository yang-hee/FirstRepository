import { useState } from "react";

const Clock : React.FC = () => {
    const [time, setTime] = useState(new Date());

    // 1초마다 실행 time 갱신!
    setInterval(() => {
        setTime(new Date())
    }, 1000)

    return(
        <div>
            현재 시간 : {time.toLocaleTimeString()}
        </div>
    )
}
export default Clock;
