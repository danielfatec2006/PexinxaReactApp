import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.isDark ? '#121212' : '#ffffff')};
    color: ${(props) => (props.isDark ? '#ffffff' : '#000000')};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => (props.isDark ? '#333' : '#f0f0f0')};
  color: ${(props) => (props.isDark ? '#fff' : '#000')};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${(props) => (props.isDark ? '#444' : '#ddd')};
  }
`;