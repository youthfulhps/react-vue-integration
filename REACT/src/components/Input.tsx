import React from "react";
import styled from "styled-components";

export interface InputProps {
  handleReactInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputText: string;
}

const WholeWrapper = styled.div`
  border: #212121;
  color: #212121;
  padding: 16px 24px;
  width: 430px;
`;

const StyledInput = styled.input`
  &&& {
    all: unset;
    height: 20px;
    display: block;
    width: 90%;
    padding: 4px 8px;
    border-radius: 4px;
    border: 2px solid #212121;
    font-size: 16px;
    outline: none;
    color: #212121;
  }
`;

function Input({ handleReactInputChange, inputText }: InputProps) {
  return (
    <WholeWrapper>
      <h2>React Input</h2>
      <StyledInput onChange={handleReactInputChange} defaultValue={inputText} />
    </WholeWrapper>
  );
}

export default Input;
