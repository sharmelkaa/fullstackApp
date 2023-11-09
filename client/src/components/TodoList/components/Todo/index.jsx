import {useState} from "react";
import {useRequest} from "../../../../hooks/useRequest";
import * as SC from './styles'
import {Button, Input} from "../../../styles";

export const Todo = ({ todo, updateTodoList }) => {
    const [editTodo, setEditTodo] = useState(false)
    const [newTitle, setNewTitle] = useState(todo.title)

    const deleteRequest = useRequest()
    const putRequest = useRequest()
    const editTodoItem = async (newTodo) => {
        await putRequest('edit', 'put', newTodo)
        updateTodoList()
        setEditTodo(false)
    }
    const deleteTodoItem = async (title) => {
        await deleteRequest('delete', 'delete', { title })
        updateTodoList()
    }

    return(
        <SC.Todo>
            <SC.TodoHeader>{todo.title}</SC.TodoHeader>
            <SC.Buttons>
                <SC.FunctionalButton onClick={() => setEditTodo(true)}>Редактировать</SC.FunctionalButton>
                <SC.FunctionalButton onClick={() => deleteTodoItem(todo.title)}>Удалить</SC.FunctionalButton>
            </SC.Buttons>
            {editTodo && <SC.EditWrapper>
                <Input type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                <Button onClick={() => editTodoItem({ title: newTitle, _id: todo._id })}>Сохранить</Button>
            </SC.EditWrapper>}
        </SC.Todo>
    )
}