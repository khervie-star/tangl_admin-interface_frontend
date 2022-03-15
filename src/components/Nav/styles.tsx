import styled from "styled-components"
import {Link} from 'react-router-dom'

export const Wrapper = styled.div`
    color: white;
    background-color: #131A22;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 1.5rem;
`

export const LogoContainer = styled.div`
    display: flex; 
    align-items : center;
`

export const LogoTitle =styled.div`
    font-weight: 800;
    font-size: 1.5rem;
`

export const Navlist = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    li{
        padding: 0rem 0.625rem;
    }
`

export const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
`

