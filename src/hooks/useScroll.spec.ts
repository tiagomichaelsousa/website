import React from "react";
import { renderHook, waitFor } from "@testing-library/react";
import { useScrollY } from "./useScroll";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('useScroll', () => {
  it('should return the scroll data', () => {
    jest.spyOn(React, 'useState').mockImplementation(() => [0, jest.fn()]);
    const windowAddListener = jest.spyOn(window, 'addEventListener');
    
    const { result } = renderHook(useScrollY)
    expect(result.current).toEqual(0);
    expect(windowAddListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('should remove the event listener', () => {
    jest.spyOn(React, 'useState').mockImplementation(() => [0, jest.fn()]);
    const windowRemoveListener = jest.spyOn(window, 'removeEventListener');
    
    renderHook(useScrollY).unmount();
    
    expect(windowRemoveListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('should update the scroll data', async () => {
    const setScrollY = jest.fn();
    jest.spyOn(React, 'useState').mockImplementation(() => [0, setScrollY]);

    window.scrollY = 100
    jest.spyOn(window, 'addEventListener').mockImplementation((_, cb: any) => cb());
    
    renderHook(useScrollY)
    
    await waitFor(() => {
      expect(setScrollY).toHaveBeenCalledWith(100);
    });
  });
});