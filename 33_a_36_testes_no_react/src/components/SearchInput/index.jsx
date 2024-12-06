import './styles.css'

export const SeachInput = ({ handleChange }) => {
    return(
        <input className='search-input' type="search" onChange={handleChange} placeholder='Pesquise aqui...' />
    )
}
