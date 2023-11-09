import {Todo} from "./components/Todo";

export const TodoList = ({ todoList, updateTodoList }) =>
    <>
        {
            !todoList.length && <>Loading...</>
        }
        {
            todoList.map((item) => <Todo key={item._id} todo={item} updateTodoList={updateTodoList}/>)
        }
    </>
