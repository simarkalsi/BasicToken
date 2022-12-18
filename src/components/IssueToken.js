import React from 'react'
import styled from 'styled-components';


export default function IssueToken() {
    return (
        <>
            <Wrapper>
                <h2>Issue Token</h2>
                <DivWrapper >
                    <IssuingInput type="number" placeholder='Amount in ETH' id="setAmount" min="0" /><br />
                </DivWrapper>
                <Button>ISSUE</Button>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
margin:20px 500px;
padding: 10px;
`
const DivWrapper = styled.div`
    display: flex;
    background-color: rgba(141, 141, 141, 0.18);
    border-radius: 10px;
    margin: 10px 0px 10px 0px;
`
const IssuingInput = styled.input`
 background-color: transparent;
 border: 0px;
    width: 100%;
    padding: 10px;
    outline: none;

    ::-webkit-outer-spin-button{
        -webkit-appearance: none;
  margin: 0;
    }
    ::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;}
`
const Button = styled.button`
background-color: blue;
padding: 7px 25px;
color: white;
border-radius: 10px;
`