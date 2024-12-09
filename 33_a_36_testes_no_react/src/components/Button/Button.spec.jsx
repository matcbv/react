import { fireEvent, render, screen } from '@testing-library/react';
// Importando o botão para ser renderizado
import { Button } from '.';

// Com o método describe, conseguimos definir um agrupamento para nossos testes, passando uma descrição, seguido por uma função de callback contendo todos os testes relacionados ao componente sendo testado.
describe('<Button />', () => {

    // Através de funções como it ou test, podemos realizar testes em nossos componentes. Sua estrutura é composta por uma descrição do que o teste espera, junto de uma função de callback com o código a ser executado no teste.
    it('should render the button with the text', () => {
        // Através da função render, da testing-library, podemos renderizar nosso componente para testes.
        render(<Button text="Load more posts"/>);
        // Através da função expect, podemos acessar o método assertions, responsável por validar o número de asserções do nosso teste. As asserções são os pontos do teste onde você verifica se o comportamento do código está conforme esperado. Elas são feitas com a função expect(), que compara o valor retornado do seu código com o valor esperado.
        expect.assertions(1);
        /*
            Através do objeto screen, podemos utilizar diversos métodos para acessar os elementos renderizados no DOM.

            Com o método getByRole(), iremos obter nosso elemento através de seu tipo (button). Também podemos informar o texto visivel que queremos que nosso elemento tenha, através da propriedade name.
        */
        const button = screen.getByRole('button', { name: /load more post/i });
        // Ao chamarmos nossa função expect, nos é retornado um objeto contendo diversos matchers, que são métodos responsáveis por verificar se o elemento atende a certa expectativa. Abaixo, faremos nossa asserção, verificando se nosso elemento está contido no documento.  
        expect(button).toBeInTheDocument();
    });

    it('should call a function on click', () => {
        // Criando uma mock function através da função fn() da biblioteca jest.
        const fn = jest.fn();
        render(<Button onClick={fn} text="Load more posts"/>);

        const button = screen.getByRole('button', { name: /load more posts/i });
        // Simulando um evento de click com o 
        fireEvent.click(button);
        expect(fn).toHaveBeenCalledTimes(1);
    })

    it('should be disabled when disabled is true', () => {
        // Passando a um valor para a propriedade disabled:
        render(<Button text="Load more posts" disabled={true}/>);

        const button = screen.getByRole('button', { name: /load more posts/i });
        // Verificando se nosso elemento está desabilitado
        expect(button).toBeDisabled();
    });

    it('should be enabled when disabled is false', () => {
        render(<Button text="Load more posts" disabled={false}/>);

        const button = screen.getByRole('button', { name: /load more posts/i });
        // Verificando se nosso elemento está habilitado
        expect(button).toBeEnabled();
    });

    it('should match snapshot', () => {
        const fn = jest.fn();
        const {container} = render(<Button text="Load more posts" onClick={fn} disabled={false}/>);

        expect(container.firstChild).toMatchSnapshot();
    })
});
