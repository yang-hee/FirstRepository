import styled from "styled-components";

function Header() {
    return(
        <HeaderStyle>
            <h1>book store</h1>
        </HeaderStyle>
    )
}
// styled.태그명
const HeaderStyle = styled.header`
/* 구조분해할당으로 theme 호출 */
    background-color: ${({theme}) => theme.color.background};

    h1 {
        color: ${({theme}) => theme.color.primary}
    }
`;

export default Header;