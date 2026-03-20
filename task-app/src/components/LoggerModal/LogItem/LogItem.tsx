import type { ILogItem } from '../../../types'
import { BsFillPersonFill } from 'react-icons/bs';
import { author, date, logItemWrap, message } from './LogItem.css';

type tLogItemProps = {
  logItem: ILogItem;
}

const LogItem = ({logItem} : tLogItemProps) => {
  // Date.now()는 호출할 때마다 값이 바뀌므로 바로 계산할 경우 경고 뜰 수 있음.
  // useEffect로 일정 시간 간격마다 갱신해주는 것이 좋다!
  let timeOffset = new Date(Date.now() - Number(logItem.logTimestamp))

  const showOffsetTime = `
    ${timeOffset.getMinutes() > 0 ? `${timeOffset.getMinutes()}m` : ""}
    ${timeOffset.getSeconds() > 0 ? `${timeOffset.getSeconds()}s` : ""}
    ${timeOffset.getSeconds() === 0 ? `just now` : ""}
  `
  return (
    <div className={logItemWrap}>
      <div className={author}>
        {/* 로그 작성자 */}
        <BsFillPersonFill />
        {logItem.logAuthor}
      </div>
      {/* 로그 메세지 */}
      <div className={message}>{logItem.logMessage}</div>
      {/* 로그 작성 시간 */}
      <div className={date}>{showOffsetTime}</div>
    </div>
  )
}

export default LogItem