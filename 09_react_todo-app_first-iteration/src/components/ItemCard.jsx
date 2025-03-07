import PropTypes from 'prop-types';

const ItemCard = ({ item }) => {
  const getStatusClassName = () => {
    switch (item.status.toLowerCase()) {
      case 'done':
        return 'status--done';
      case 'in progress':
        return 'status--in-progress';
      default:
        return 'status--pending';
    }
  };

  return (
    <div className="item-card">
      <h4 className="item-card__title">{item.title}</h4>
      <p className="item-card__description">{item.description}</p>
      <div className={`item-card__status ${getStatusClassName()}`}>
        {item.status}
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemCard; 