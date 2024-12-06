import Button from '.'

descbribe('<Button />', () => {
    it('should render the button with the text', () => {
        render(<Button text="Load more posts"/>);
        const button = screen.getByRole('button', { name: 'Load more posts' });
        expect(button).toBeInTheDocument();
    });
});
