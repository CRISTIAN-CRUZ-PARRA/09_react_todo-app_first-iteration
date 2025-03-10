import PropTypes from 'prop-types';

const ListHeader = ({ content }) => {
  return <h3 className="list-header">{content}</h3>;
};

ListHeader.propTypes = {
  content: PropTypes.string.isRequired
};

export default ListHeader; 