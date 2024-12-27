/*
    O PropTypes no React é usado para validar o tipo das propriedades (props) que um componente recebe. Ele ajuda a garantir que as props estejam no formato esperado, evitando erros e melhorando a manutenção do código.
*/

// Importanto PropTypes:
import PropTypes from "prop-types";

export const UselessComponent = ({prop_01, prop_02, prop_03 = []}) => {
    return(
        <div>
            <p>Esse texto possui três props: {prop_01}, {prop_02}, {prop_03}</p>
        </div>
    )
}

/*
    Podemos definir valores padrão para nossos props com a propriedade defaultProps. Iremos passar um objeto contendo o nome da prop e seu valor padrão.

    Obs.: Utilizar defaultProps está em depreciação, sendo mais recomendado definir o valor padrão diretamente nos parâmetros do componente.
*/
UselessComponent.defaultProps = {
    prop_03: []
}

// Podemos definir as tipagens das nossas props com a propriedades propTypes. Iremos passar um objeto contendo o nome da prop e seus respectivo tipos.
UselessComponent.propTypes = {
    prop_01: PropTypes.string.isRequired,
    /*
        Com o método arrayOf(), podemos passar o tipo dos elementos contidos no array.
        Com PropTypes.shape(), podemos definir a estrutura de um objeto e os tipos de seus elementos.
    */
    prop_02: PropTypes.arrayOf(PropTypes.shape({
        sub_prop_01: PropTypes.string.isRequired,
        sub_prop_02: PropTypes.number.isRequired,
    })),
    // Podemos também definir um array de forme simples, apenas com a propriedade array.
    prop_03: PropTypes.array
}
