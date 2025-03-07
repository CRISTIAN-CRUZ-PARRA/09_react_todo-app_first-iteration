import PropTypes from 'prop-types';

const Todo = ({ title, description, status }) => {
  const getStatusClassName = () => {
    switch (status.toLowerCase()) {
      case 'done':
        return 'bg-green-600';
      case 'in progress':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div 
        className={`${getStatusClassName()} text-white py-2 px-4 rounded text-center uppercase text-sm font-medium`}
      >
        {status}
      </div>
    </div>
  );
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Todo; 