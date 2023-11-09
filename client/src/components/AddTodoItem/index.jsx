import {useState} from "react";
import {useRequest} from "../../hooks/useRequest";
import {Button, Form, Input} from "../styles";

export const AddTodoItem = ({ updateTodoList }) => {
    const [title, setTitle] = useState('')

    const postRequest = useRequest()
    const onSubmit = async (e) => {
        e.preventDefault()
        await postRequest('add', 'post', { title })
        updateTodoList()
        setTitle('')
    }

    return(
        <Form onSubmit={onSubmit}>
            <Input type='text' placeholder='Новое задание' value={title} onChange={(e) => setTitle(e.target.value)}/>
            <Button type='submit'>Добавить</Button>
        </Form>
    )
}