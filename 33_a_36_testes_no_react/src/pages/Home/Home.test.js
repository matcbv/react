import { render, screen } from '@testing-library/react';
import { Button } from '.';

// Com o método describe, conseguimos definir um agrupamento para nossos testes, passando uma descrição, seguido por uma função de callback contendo todos os testes relacionados ao componente sendo testado.
describe('<Component />', () => {
  it('should render the button with the text', () => {
    render(<Button />)

    const button = screen
  })
})