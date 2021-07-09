import React, { useContext } from 'react';
import { useToasts } from 'react-toast-notifications';
import { axiosInstance } from '../helpers';
import { TodoContext } from '../contexts/TodoContext';
import moment from 'moment';

const TodoDetails = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  const { addToast } = useToasts();

  const markAsComplete = async () => {
    try {
      await axiosInstance.patch(`/todos/update/${todo.id}`, {
        completed: !todo.completed,
      });
      dispatch({
        type: 'MARK_TODO',
        todo: { id: todo.id, completed: !todo.completed },
      });

      addToast('😉 You have successfully completed this todo', {
        appearance: 'success',
        autoDismiss: true,
      });
    } catch (err) {
      addToast(err.message, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  return (
    <li onClick={markAsComplete} className={todo.completed ? 'completed' : ''}>
      <small>
        Created: {moment(todo.createdAt).format('YYYY-MM-DD HH:MM a')}
      </small>
      <div className="info-sec">
        <div className="title">{todo.title}</div>
        <div className="desc">{todo.description}</div>
      </div>

      <small className="left">
        Completed: {moment(todo.updatedAt).format('YYYY-MM-DD HH:MM a')}
      </small>
    </li>
  );
};

export default TodoDetails;
