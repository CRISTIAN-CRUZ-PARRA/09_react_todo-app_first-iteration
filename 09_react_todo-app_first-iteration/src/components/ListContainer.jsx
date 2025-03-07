import PropTypes from 'prop-types';

const ListContainer = ({ children }) => {
  return <div className="list-container">{children}</div>;
};

ListContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default ListContainer; 