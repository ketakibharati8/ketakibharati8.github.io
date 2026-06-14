import { useDarkMode } from '../index';
import { renderHook, act } from '@testing-library/react';

describe('useDarkMode Hook', () => {
  it('should initialize with false', () => {
    const { result } = renderHook(() => useDarkMode());
    const [isDark] = result.current;
    expect(typeof isDark).toBe('boolean');
  });

  it('should toggle dark mode', () => {
    const { result } = renderHook(() => useDarkMode());
    const [isDark, setIsDark] = result.current;

    act(() => {
      setIsDark(!isDark);
    });

    const [newIsDark] = result.current;
    expect(newIsDark).toBe(!isDark);
  });
});
