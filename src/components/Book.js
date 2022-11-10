import PropTypes from 'prop-types';

function Book(props) {
  const { title, author } = props;
  return (
    <div className="books-shelf">
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type="submit">Remove</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
