import styled from 'styled-components'


export const FlowOne = () => {
    return (
        <Flowflex>
          <CheckedCircle></CheckedCircle>
          <FlowBar></FlowBar>
          <UnCheckedCircle></UnCheckedCircle>
          <FlowBar></FlowBar>
          <UnCheckedCircle></UnCheckedCircle>
          <FlowBar></FlowBar>
          <UnCheckedCircle></UnCheckedCircle>
        </Flowflex>
    )
}


export const FlowTwo = () => {
    return (
        <Flowflex>
          <CheckedCircle></CheckedCircle>
          <FlowBar></FlowBar>
          <CheckedCircle></CheckedCircle>
          <FlowBar></FlowBar>
          <UnCheckedCircle></UnCheckedCircle>
          <FlowBar></FlowBar>
          <UnCheckedCircle></UnCheckedCircle>
        </Flowflex>
    )
}


export const FlowThree = () => {
    return (
        <Flowflex>
          <CheckedCircle></CheckedCircle>
          <FlowBar></FlowBar>
          <CheckedCircle></CheckedCircle>
          <FlowBar></FlowBar>
          <CheckedCircle></CheckedCircle>
          <FlowBar></FlowBar>
          <UnCheckedCircle></UnCheckedCircle>
        </Flowflex>
    )
}


export const FlowFour = () => {
    return (
        <Flowflex>
          <CheckedCircle></CheckedCircle>
          <FlowBar></FlowBar>
          <CheckedCircle></CheckedCircle>
          <FlowBar></FlowBar>
          <CheckedCircle></CheckedCircle>
          <FlowBar></FlowBar>
          <CheckedCircle></CheckedCircle>
        </Flowflex>
    )
}

export const FlowFive = () => {
    return (
        <Flowflex>
          <UnCheckedCircle></UnCheckedCircle>
          <FlowBar></FlowBar>
          <UnCheckedCircle></UnCheckedCircle>
          <FlowBar></FlowBar>
          <UnCheckedCircle></UnCheckedCircle>
        </Flowflex>
    )
}

export const FlowSix = () => {
    return (
        <Flowflex>
          <CheckedCircle></CheckedCircle>
          <FlowBar></FlowBar>
          <UnCheckedCircle></UnCheckedCircle>
          <FlowBar></FlowBar>
          <UnCheckedCircle></UnCheckedCircle>
        </Flowflex>
    )
}

export const FlowSeven = () => {
    return (
        <Flowflex>
          <CheckedCircle></CheckedCircle>
          <FlowBar></FlowBar>
          <CheckedCircle></CheckedCircle>
          <FlowBar></FlowBar>
          <UnCheckedCircle></UnCheckedCircle>
        </Flowflex>
    )
}

export const FlowEight = () => {
    return (
        <Flowflex>
          <CheckedCircle></CheckedCircle>
          <FlowBar></FlowBar>
          <CheckedCircle></CheckedCircle>
          <FlowBar></FlowBar>
          <CheckedCircle></CheckedCircle>
        </Flowflex>
    )
}


export const CheckedCircle = styled.p`
  box-sizing: border-box;
  background: #007AFB;
  border:1px solid #007AFB;
  border-radius:50%;
  height: 12px;
  width: 12px;
`

export const UnCheckedCircle = styled.p`
  box-sizing: border-box;
  border:1px solid #007AFB;
  border-radius:50%;
  height: 12px;
  width: 12px;

`

export const FlowBar = styled.p`
  height:1px;
  width:40px;
  background: #007AFB;
  margin:0px 8px;
`

export const Flowflex = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
`


