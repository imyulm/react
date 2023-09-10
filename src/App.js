import './App.css';
import { createGlobalStyle } from 'styled-components'
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import TodoProvider from './TodoContext';
// 참조한 프로젝트 https://react.vlpt.us/mashup-todolist/02-manage-state.html

const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}
`;

function App() {
  return (
    <>
      {/*TodoProvide의 export function이나 context들 사용할 수 있게 하려면 TodoProvider로 감싸야함*/}
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </>
  );
}

export default App;
