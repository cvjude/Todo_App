export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ALL_TODOS':
      return action.todos;
    case 'ADD_TODO':
      return [...state, action.todo];
    case 'MARK_TODO':
      return state.map((todo) => {
        if (todo.id === action.todo.id) {
          return { ...todo, completed: action.todo.completed };
        }

        return todo;
      });
    default:
      return state;
  }
};
