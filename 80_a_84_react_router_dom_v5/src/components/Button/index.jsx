import PropTypes from "prop-types";

export default function Button({children, onClickFunc}){
    return (
        <button type="button" onClick={onClickFunc}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClickFunc: PropTypes.func.isRequired,
};
