import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { SeachInput } from '.';

describe('<SearchInput />', () => {

    it('should have a value of searchValue', () => {
        const fn = jest.fn();
        render(<SeachInput handleChange={fn} searchValue={'random value'} />);

        const input = screen.getByPlaceholderText(/pesquise aqui\.\.\./i);

        // O teste com toBeInTheDocument() nesse caso é irrelevante, já que se o botão não fosse obtido acima, um erro já seria levantado.
        expect(input).toBeInTheDocument();
        expect(input.value).toBe('random value');
    });

    it('should call handleChange function on each key pressed', () => {
        const fn = jest.fn();
        render(<SeachInput handleChange={fn} />);

        const input = screen.getByPlaceholderText(/pesquise aqui\.\.\./i);
        const value = 'random value';

        userEvent.type(input, value);
        expect(fn).toHaveBeenCalledTimes(value.length);
    });

    it('should match snapshot', () => {
        const fn = jest.fn();
        const {container} = render(<SeachInput handleChange={fn} />);
        
        expect(container.firstChild).toMatchSnapshot();
    });
});