// src/styles/styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: #f0f2f5;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  margin: 0.5rem;
  background-color: #3498db;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

export const LinkButton = styled(Button).attrs({ as: 'a' })`
  text-decoration: none;
`;

export const SuggestionBox = styled.div`
  background-color: #ecf0f1;
  border: 2px dashed #27ae60;
  color: #27ae60;
  padding: 1.5rem;
  border-radius: 10px;
  font-size: 1.25rem;
  margin: 1rem 0;
`;

export const HistoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  width: 100%;
  max-width: 500px;
`;

export const HistoryItem = styled.li`
  background-color: #fff;
  border: 1px solid #dcdde1;
  padding: 1rem;
  margin-bottom: 0.75rem;
  border-radius: 6px;
  color: #2f3640;
  font-size: 1rem;
`;
