import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock;

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
        render(<PostCard {...props} />);

        expect.assertions(3);

        expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', props.url);
        expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument();
        // Como não existe um role para parágrafos, iremos utilizar o getByText, passando o conteúdo do nosso parágrafo.
        expect(screen.getByText( props.body )).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const { container } = render(<PostCard {...props} />);
        // Ao utilizarmos o método toMatchSnapshot() pela primeira vez, é criado um snapshot do estado atual de nosso componente. Esse será salvo no diretório __snapshots__. Em testes futuros, ele irá realizar uma comparação do componente com o estado contido no último snapshot salvo.
        expect(container.firstChild).toMatchSnapshot();
    })
}); 