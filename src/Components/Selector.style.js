import styled from 'styled-components';

export const SelectorContainer = styled.div`
  height: calc(4.6rem);
  max-height: 12vh;
  overflow-y: auto;
  text-align: left;
  padding: 0 7%;
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
