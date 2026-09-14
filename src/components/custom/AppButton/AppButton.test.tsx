import { render, screen, fireEvent } from '@testing-library/react';
import AppButton, {
  AppButtonSize,
  AppButtonVariant,
  ComponentType,
  getPathIcon,
} from '@components/custom/AppButton/AppButton';
import { MemoryRouter } from 'react-router-dom';

describe('AppButton', () => {
  test('render button', () => {
    render(<AppButton />);
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });

  test('AppButton with className', () => {
    render(<AppButton className="test-classname" />);
    expect(screen.getByTestId('button')).toHaveClass('test-classname');
  });

  test('variant text', () => {
    render(<AppButton variant={AppButtonVariant.TEXT} />);
    expect(screen.getByTestId('button')).toHaveClass('text');
  });

  test('variant text contrast', () => {
    render(<AppButton variant={AppButtonVariant.TEXT_CONTRAST} />);
    expect(screen.getByTestId('button')).toHaveClass('text-contrast');
  });

  test('variant outlined', () => {
    render(<AppButton variant={AppButtonVariant.OUTLINED} />);
    expect(screen.getByTestId('button')).toHaveClass('outlined');
  });

  test('variant outlined contrast', () => {
    render(<AppButton variant={AppButtonVariant.OUTLINED_CONTRAST} />);
    expect(screen.getByTestId('button')).toHaveClass('outlined-contrast');
  });

  test('variant contained', () => {
    render(<AppButton variant={AppButtonVariant.CONTAINED} />);
    expect(screen.getByTestId('button')).toHaveClass('contained');
  });

  test('variant contained contrast', () => {
    render(<AppButton variant={AppButtonVariant.CONTAINED_CONTRAST} />);
    expect(screen.getByTestId('button')).toHaveClass('contained-contrast');
  });

  test('size l', () => {
    render(<AppButton size={AppButtonSize.L} />);
    expect(screen.getByTestId('Text')).toHaveClass('l');
  });

  test('size m', () => {
    render(<AppButton size={AppButtonSize.M} />);
    expect(screen.getByTestId('Text')).toHaveClass('m');
  });

  test('size s', () => {
    render(<AppButton size={AppButtonSize.S} />);
    expect(screen.getByTestId('Text')).toHaveClass('s');
  });

  test('isDisabled attribute works correctly', () => {
    render(<AppButton isDisabled />);
    expect(screen.getByTestId('button')).toBeDisabled();
  });

  test('onClick function is called', () => {
    const mockOnClick = jest.fn();
    render(<AppButton onClick={mockOnClick} />);
    fireEvent.click(screen.getByTestId('button'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('renders as a link with to attribute', () => {
    render(
      <MemoryRouter>
        <AppButton to="/example" componentType={ComponentType.link} />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('link')).toHaveAttribute('href', '/example');
  });

  test('renders button with empty text', () => {
    render(<AppButton text="" />);
    const button = screen.getByTestId('button');
    expect(button).toHaveTextContent('');
  });

  test('getPathIcon returns null for unknown paths', () => {
    expect(getPathIcon('/unknown')).toBeNull();
  });
});
