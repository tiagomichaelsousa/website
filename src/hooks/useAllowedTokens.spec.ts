import { useQueryParam } from 'use-query-params';
import useAllowedTokens from './useAllowedTokens';
import * as Env from '@utils/env';

jest.mock('use-query-params', () => ({
  useQueryParam: jest.fn(),
}));

describe('useAllowedTokens', () => {
  afterEach(() => {
    jest.resetAllMocks();
  })

  describe('when the token is not present', () => {
    it('should return the about data', () => {
      (useQueryParam as jest.Mock).mockImplementation(() => [null]);
  
      expect(useAllowedTokens()).toBeFalsy();
      expect(useQueryParam).toBeCalledTimes(1);
    });
  });

  describe('when the token is present but not allowed', () => {
    it('should return the about data', () => {
      (useQueryParam as jest.Mock).mockImplementation(() => ['token']);
  
      expect(useAllowedTokens()).toBeFalsy();
      expect(useQueryParam).toBeCalledTimes(1);
    });
  });

  describe('when the token is present and allowed', () => {
    it('should return the about data', () => {
      (useQueryParam as jest.Mock).mockImplementation(() => ['token']);
      (jest as typeof jest & { replaceProperty: (obj: object, key: string, value: any) =>  void}).replaceProperty(Env, 'ACCESS_TOKENS', 'token');

      expect(useAllowedTokens()).toBeTruthy();
      expect(useQueryParam).toBeCalledTimes(1);
    });
  });
});