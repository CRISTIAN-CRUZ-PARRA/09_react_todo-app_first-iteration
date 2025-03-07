import PropTypes from 'prop-types';

const Subheader = ({ subtitle }) => {
  return <h2 className="subheader">{subtitle}</h2>;
};

Subheader.propTypes = {
  subtitle: PropTypes.string.isRequired
};

export default Subheader; 