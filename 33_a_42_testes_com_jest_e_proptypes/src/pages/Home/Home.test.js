import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '.';

const handlers = [
/*
  Ao realizarmos nossas requisições através do objeto rest, do MSW, um função de callback é passada para ser chamada em cada simulação da requisição. Abaixo, utilizaremos o manipulador get.

  O parâmetro ctx é um objeto fornecido pela biblioteca para ajudar a construir e manipular as respostas da API simulada. Ele contém métodos e utilitários que facilitam a criação de respostas personalizadas, como definir cabeçalhos, status HTTP, e o corpo da resposta.

  Obs.: O uso de * em uma URL passada para os manipuladores de rest no MSW (Mock Service Worker) atua como um coringa (wildcard). Ele permite que você capture qualquer parte variável na URL com req.params, tornando o manipulador mais flexível ao lidar com URLs dinâmicas ou desconhecidas.
*/
  rest.get('*jsonplaceholder.typicode.com*', async (req, res, ctx) => {
    return res(
      // Definindo o status HTTP:
      ctx.status(200),
      // Definindo o corpo da resposta:
      ctx.json([
        {
          "userId": 1,
          "id": 1,
          "title": "title 1",
          "body": "body 1",
          // Passando a URL para corresponder também com a requisição feita para obter as imagens dos nossos posts. 
          "url": "images/img_01.png",
        },
        {
          "userId": 2,
          "id": 2,
          "title": "title 2",
          "body": "body 2",
          "url": "images/img_02.png",
        },
        {
          "userId": 3,
          "id": 3,
          "title": "title 3",
          "body": "body 3",
          "url": "images/img_03.png",
        },
      ]),
    );
  })
];

// Criando nosso servidor de mock a partir de nossos handlers para interceptar nossas requisições HTTP:
const server = setupServer(...handlers);

describe('<Home />', () => {

  // Inicializando nosso servidor antes de iniciarmos nossos testes:
  beforeAll(() => server.listen());

  // Resetando os manipuladores após cada execução de um teste:
  afterEach(() => server.resetHandlers())

  // Encerrando nosso servidor após realizarmos nossos testes:
  afterAll(() => server.close())

  it('should render search input, posts and load more button', async () => {
    render(<Home />);

    expect.assertions(3);

    const noResultingPosts = screen.getByText('Ops... Nenhum post foi encontrado.');
    await waitForElementToBeRemoved(noResultingPosts);

    const searchInput = screen.getByPlaceholderText('Pesquise aqui...');
    expect(searchInput).toBeInTheDocument();

    const images = screen.getAllByRole('img');
    expect(images).toHaveLenght(2);

    const loadMoreBtn = screen.getByRole('button', { name: /load more posts/i })
    expect(loadMoreBtn).toBeInTheDocument();
  });

  it('should search for posts', () => {
    render(<Home />);

    expect.assertions(10);

    const searchInput = screen.getByPlaceholderText('Pesquise aqui...');

    expect(screen.getByRole('heading', { name: 'title 1' }).toBeInTheDocument());
    expect(screen.getByRole('heading', { name: 'title 2' }).toBeInTheDocument());
    expect(screen.queryByRole('heading', { name: 'title 3' }).not.toBeInTheDocument());

    userEvent.type(searchInput, 'title 1');
    expect(screen.getByRole('heading', { name: 'title 1' }).toBeInTheDocument());
    expect(screen.queryByRole('heading', { name: 'title 2' }).not.toBeInTheDocument());
    expect(screen.queryByRole('heading', { name: 'title 3' }).not.toBeInTheDocument());
    expect(screen.getByRole('heading', { name: 'Search value: title 1' }));
  
    userEvent.clear(searchInput);
    expect(screen.getByRole('heading', { name: 'title 1' }).toBeInTheDocument());
    expect(screen.getByRole('heading', { name: 'title 2' }).toBeInTheDocument());

    userEvent.type(searchInput, 'post does not exist')
    expect(screen.getByText('Ops... Nenhum post foi encontrado.')).toBeInTheDocument();
  });

  it('should load more posts', () => {
    render(<Home />)

    expect.assertions(2)
    
    const loadMoreBtn = screen.getByRole('button', { name: /load more posts/i })

    userEvent.click(loadMoreBtn)
    expect(screen.getByRole('heading', { name: 'title 3' })).toBeInTheDocument();
    expect(loadMoreBtn).toBeDisabled();
  })
});
