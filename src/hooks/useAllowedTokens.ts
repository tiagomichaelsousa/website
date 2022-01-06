import { ACCESS_TOKENS } from '@utils/env';
import { useQueryParam } from 'gatsby-query-params';

const useAllowedTokens = () => {
  const allowedTokens = ACCESS_TOKENS.split(',');
  const token = useQueryParam('token', null);

  if (!token) return false;

  return allowedTokens.includes(token);
};

export default useAllowedTokens;
