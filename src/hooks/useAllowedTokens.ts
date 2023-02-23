import { ACCESS_TOKENS } from '@utils/env';
import { useQueryParam, StringParam } from 'use-query-params';

const useAllowedTokens = () => {
  const [token] = useQueryParam('token', StringParam);
  const allowedTokens = ACCESS_TOKENS.split(',');

  if (!token) return false;

  return allowedTokens.includes(token);
};

export default useAllowedTokens;
