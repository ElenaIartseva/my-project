import { fireEvent, render, screen } from '@testing-library/react';
import AppModal from './AppModal';

describe('AppModal', () => {
  afterEach(() => {
    document.body.style.overflow = '';
  });

  test('does not render when closed', () => {
    render(<AppModal title="Modal title">Content</AppModal>);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('calls onClose when Escape is pressed', () => {
    const onClose = jest.fn();

    render(<AppModal isOpen onClose={onClose} title="Modal title">Content</AppModal>);
    fireEvent.keyDown(document, { key: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('locks body scroll while open and restores it after unmount', () => {
    document.body.style.overflow = 'auto';

    const { unmount } = render(<AppModal isOpen title="Modal title">Content</AppModal>);

    expect(document.body.style.overflow).toBe('hidden');

    unmount();

    expect(document.body.style.overflow).toBe('auto');
  });

  test('focuses modal content and traps keyboard focus', () => {
    render(
      <AppModal isOpen title="Modal title">
        <button type="button">First action</button>
        <button type="button">Second action</button>
      </AppModal>,
    );

    const firstButton = screen.getByRole('button', { name: 'First action' });
    const secondButton = screen.getByRole('button', { name: 'Second action' });

    expect(firstButton).toHaveFocus();

    secondButton.focus();
    fireEvent.keyDown(document, { key: 'Tab' });

    expect(firstButton).toHaveFocus();

    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });

    expect(secondButton).toHaveFocus();
  });

  test('restores focus to the previously focused element', () => {
    const openerButton = document.createElement('button');
    document.body.appendChild(openerButton);
    openerButton.focus();

    const { unmount } = render(<AppModal isOpen title="Modal title">Content</AppModal>);

    unmount();

    expect(openerButton).toHaveFocus();
    openerButton.remove();
  });
});
