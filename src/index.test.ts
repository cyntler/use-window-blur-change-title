/**
 * @name use-window-blur-change-title
 * @author cyntler <damian@cyntler.com>
 */
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/react';
import { useWindowBlurChangeTitle } from './index';

test('it handles window blur and focus event', () => {
  const defaultTitle = 'Test';
  const blurTitle = 'Blur';

  document.title = defaultTitle;
  renderHook(() => useWindowBlurChangeTitle(blurTitle));

  expect(document.title).toBe(defaultTitle);
  fireEvent.blur(window);
  expect(document.title).toBe(blurTitle);

  fireEvent.focus(window);
  expect(document.title).toBe(defaultTitle);
});
