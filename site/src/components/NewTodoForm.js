import React, { useContext, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { TodoContext } from '../contexts/TodoContext';
import { axiosInstance } from '../helpers';
import loader from '../assets/loader.gif';

const NewBookForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState();
  const { addToast } = useToasts();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const todo = await axiosInstance.post(`/todos`, { title, description });
      dispatch({ type: 'ADD_TODO', todo: todo.data.data });
      setTitle('');
      setDescription('');

      addToast('😉 Successfully Added', {
        appearance: 'success',
        autoDismiss: true,
      });
    } catch (err) {
      addToast(err.message, {
        appearance: 'error',
        autoDismiss: true,
      });
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descrition"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit" className="btn">
        <span>Add Todo</span>
        {loading && (
          <span className="btn-loader">
            <img src={loader} alt="loading" />
          </span>
        )}
      </button>
    </form>
  );
};

export default NewBookForm;
