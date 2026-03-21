// 3자리마다 ,를 넣어주는 함수
export const formatNumber = (number: number): string => {
    return number.toLocaleString()
}