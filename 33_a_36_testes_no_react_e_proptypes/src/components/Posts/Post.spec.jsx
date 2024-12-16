import { Posts } from '../Posts';
import { render, screen } from '@testing-library/react';

const props = {
    posts: [
        {
            id: 1,
            title: 'title 1',
            body: 'body 1',
            url: 'images/img1.png' 
         },
         {
            id: 2,
            title: 'title 2',
            body: 'body 2',
            url: 'images/img2.png' 
         },
         {
            id: 3,
            title: 'title 3',
            body: 'body 3',
            url: 'images/img3.png' 
         }
    ]
};

describe('<Post />', () => {
    it('should render the posts', () => {
        render(<Posts {...props}/>);

        expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
        expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
        expect(screen.getAllByText(/body/i)).toHaveLength(3);
        // Através do método toHaveAttribute(attribute, value), verificamos se determinado elemento possui um atributo com um respectivo valor:
        expect(screen.getByRole('img', { name: /title 3/i })).toHaveAttribute('src', 'images/img3.png');
    });

    it('should match snapshot', () => {
        const { container } = render(<Posts {...props}/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});