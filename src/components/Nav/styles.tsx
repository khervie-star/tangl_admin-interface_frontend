import styled from "styled-components"
import {Link} from 'react-router-dom'


export const NavContainer = styled.div`
    color: white;
    background-color: #131A22;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 2.25rem 5rem;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoContainer = styled.div`
    display: flex; 
    align-items : center;
    padding-right: 2.5rem;
`;

export const LogoTitle =styled.div`
    margin-left: 0.971rem;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2rem;
`;

export const Navlist = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    li{
        padding: 0rem 2.5rem;
    }
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    font-size: 1.125rem;
    line-height: 1.75rem;
`;

export const NavButtons = styled.div`
    display: flex;
    align-items: center;
`;


export const SignInButton = styled.button`
    background: #011122;
    color: inherit;
    border: 1px solid #A0AABA;
    box-sizing: border-box;
    border-radius: 32px;
    padding:0.625rem 1rem;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    margin-right: 1.25rem;
    cursor: pointer;
`;


export const SignUpButton = styled.button`
    background: #007AFB;
    color: inherit;
    border: 1px solid #007AFB;
    box-sizing: border-box;
    border-radius: 32px;
    padding:0.625rem 1rem;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    margin-left: 1.25rem;
    cursor: pointer;
`;

