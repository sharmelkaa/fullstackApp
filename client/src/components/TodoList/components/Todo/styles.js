import styled from "styled-components";

export const FunctionalButton = styled.span`
  cursor: pointer;
  font-style: italic;
  
  &:hover {
    color: darkred;
  }
`
export const Buttons = styled.div`
  display: flex;
  max-width: 500px;
  width: 100%;
  justify-content: flex-end;
  gap: 15px;
`

export const TodoHeader = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  max-width: 500px;
`
export const Todo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`

export const EditWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 500px;
  gap: 25px;
  border: 1px solid crimson;
  padding: 10px 5px;
`
