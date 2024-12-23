const { rest } = require('msw');
const { setupServer } = require('msw/node');
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import Home from '.';

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', async (req, res, ctx) => {
    return res(ctx.json([
        {
          "userId": 1,
          "id": 1,
          "title": "title 1",
          "body": "body 1"
        },
        {
          "userId": 2,
          "id": 2,
          "title": "title 2",
          "body": "body 2"
        },
        {
          "userId": 3,
          "id": 3,
          "title": "title 3",
          "body": "body 3"
        }
      ])
    );
  })
];

const server = setupServer(...handlers);

describe('<Home />', () => {

  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  })

  afterAll(() => {
    server.close();
  })

  it('should render search input, posts and load more button', async () => {
    render(<Home />);
    const noResultingPosts = screen.getByText('Ops... Nenhum post foi encontrado.');
    await waitForElementToBeRemoved(noResultingPosts);
  });
});
