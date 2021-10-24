import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${( { theme } ) => theme.colors.header};
    padding: 40px 0;

`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
`

export const Logo = styled.img``