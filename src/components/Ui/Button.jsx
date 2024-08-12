
import PropTypes from "prop-types";

export default function Button({label, className}) {
  return (
    <div>
      <button className={className}>
        {label}
      </button>
    </div>
  );
}

// PropTypes ile props doğrulaması
Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

