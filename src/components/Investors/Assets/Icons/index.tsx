import styled from "styled-components"

export const TickIcon = () => {
    return(
        <Ellipse>
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.90826 2.42726C1.49972 2.05562 0.867266 2.08553 0.495627 2.49407C0.123989 2.90261 0.153903 3.53507 0.562441 3.90671L1.90826 2.42726ZM3.63836 5.35294L2.96544 6.09267L3.63836 6.7048L4.31127 6.09267L3.63836 5.35294ZM8.96709 1.85737C9.37562 1.48573 9.40554 0.853275 9.0339 0.444737C8.66226 0.0361985 8.0298 0.00628495 7.62126 0.377923L8.96709 1.85737ZM0.562441 3.90671L2.96544 6.09267L4.31127 4.61322L1.90826 2.42726L0.562441 3.90671ZM4.31127 6.09267L8.96709 1.85737L7.62126 0.377923L2.96545 4.61322L4.31127 6.09267Z" fill="white"/>
            </svg>
        </Ellipse>
    )
}

export const Ellipse = styled.div`
  height: 16px;
  width: 16px;
  background: #324A64;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center
`