import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

const ItemsList = ({ itemsList }) => {
  return (
    <div className="items-list">
      {itemsList.map((item, index) => (
        <ItemCard key={index} item={item} />
      ))}
    </div>
  );
};

ItemsList.propTypes = {
  itemsList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ItemsList; 