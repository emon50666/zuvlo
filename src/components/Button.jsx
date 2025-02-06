import PropTypes from 'prop-types';

export default function Button({ text, onClick }) {
    return (
      <button
        onClick={onClick}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-all"
      >
        {text}
      </button>
    );
  }

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
  