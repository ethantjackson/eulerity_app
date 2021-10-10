import styled, { keyframes } from 'styled-components';

export const SelectorContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 4.6rem;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: left;
  padding: 0 0 0 5%;
  color: grey;
  p {
    display: inline-block;
    margin: 0.15rem 0;
  }
  i {
    color: #b9b9b9;
    position: relative;
    top: 1px;
    left: -1px;
  }
`;

export const SelectionItemsContainer = styled.div`
  flex-grow: 2;
  width: calc(100% - 15vh);
`;

export const SelectionItem = styled.li`
  display: inline-block;
  color: white;
  background-color: black;
  border-radius: 1rem;
  margin: 0.15rem 0.5rem;
  padding: 0.25rem 0.5rem;
  box-shadow: 1px 1px 5px #b9b9b9;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    transform: scale(1.2);
  }
`;

export const SelectionActionBtns = styled.div`
  width: 11vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  a {
    height: calc(1rem + 3vh) !important;
    width: calc(1rem + 3vh) !important;
  }
  i {
    color: white;
    line-height: calc(0.9rem + 3vh) !important;
    font-size: calc(1.2rem + 1vh);
  }
`;

const extend = keyframes`
  from {
    transform: scaleY(0);
    /* margin-bottom: -1rem; */
  }

  to {
    transform: scaleY(1);
    /* margin-bottom: 0; */
  }
`;
export const SearchBarInput = styled.input`
  outline: none;
  position: -webkit-sticky;
  position: sticky;
  text-align: right;
  top: 0;
  left: 24%;
  padding: 1rem;
  width: 75%;
  height: 3rem;
  border-radius: 1rem;
  border: 1px solid transparent;
  /* box-shadow: 1px 1px 1px rgba(73, 73, 73, 0.6); */
  z-index: 1;
  background-color: rgba(73, 73, 73, 0.6);
  color: #eee;
  font-size: 1.6rem;
  letter-spacing: 3px;
  margin-bottom: -3rem;

  animation: ${extend} 0.2s ease-in-out;
`;
