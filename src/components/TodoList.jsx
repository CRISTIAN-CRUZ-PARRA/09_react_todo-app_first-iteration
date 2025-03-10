import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Todo List</h2>
      <div className="space-y-4">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            title={todo.title}
            description={todo.description}
            status={todo.status}
          />
        ))}
      </div>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TodoList; 