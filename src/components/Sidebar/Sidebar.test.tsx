import { fireEvent, render, screen } from '@testing-library/react';
import Sidebar from '@components/Sidebar/Sidebar';
import ComponentRender from '@config/jest/ComponentRender';

describe('Sidebar', () => {
  test('render component', () => {
    render(ComponentRender(<Sidebar />));
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('Sidebar')).toHaveAttribute('data-expanded', 'false');
  });

  test('разворачивание Sidebar', () => {
    render(ComponentRender(<Sidebar />));
    fireEvent.click(screen.getByTestId('button'));
    expect(screen.getByTestId('Sidebar')).toHaveAttribute('data-expanded', 'true');
  });

  test('сворачивание Sidebar', () => {
    render(ComponentRender(<Sidebar />));
    fireEvent.click(screen.getByTestId('button'));
    fireEvent.click(screen.getByTestId('button'));
    expect(screen.getByTestId('Sidebar')).toHaveAttribute('data-expanded', 'false');
  });
});
