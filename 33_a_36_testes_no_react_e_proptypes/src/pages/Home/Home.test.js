import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import Home from '.';

describe('<Home />', () => {
  it('should render search input, posts and load more button', async () => {
    render(<Home />);
    const noResultingPosts = screen.findByText('Ops... Nenhum post foi encontrado.');
    await waitForElementToBeRemoved(noResultingPosts);
  });
});
