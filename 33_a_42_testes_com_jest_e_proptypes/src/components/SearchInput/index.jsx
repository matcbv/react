import './styles.css';
import PropTypes from 'prop-types';

export const SeachInput = ({handleChange, searchValue = ''}) => {
    return(
        <input className='search-input' type="search" onChange={handleChange} value={searchValue} placeholder='Pesquise aqui...' />
    );
};

SeachInput.propTypes = {
    handleChange: PropTypes.func.isRequired,
    searchValue: PropTypes.string,
};
