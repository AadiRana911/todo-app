import React from 'react'
import {Todo} from '../entities/Todo'
import { TodoItem } from './TodoItem'
import './TodoList.scss'
type Props = {
    todos: Todo[]
}
export const TodoList: React.FC<Props> = ({ todos }) => {
    return (
        <ul className='todo-list'>
            {
                todos.map((todo, index) => (
                    <li key = {index}><TodoItem title={todo.title} description={todo.description} isCompleted={todo.isCompleted} /></li>
                ))
            }
        </ul>
    )
}

