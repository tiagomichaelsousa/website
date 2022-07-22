import React from 'react';
import { GatsbyLink, Flex } from '@components';

export const Pagination = ({ pageContext }: { pageContext: PaginationType }) => {
  const { previousPagePath, nextPagePath } = pageContext;

  return (
    <Flex justify="between" align="center">
      <GatsbyLink to={previousPagePath} variant="button" size="2" disabled={!previousPagePath}>
        Previous
      </GatsbyLink>

      <GatsbyLink to={nextPagePath} variant="button" size="2" disabled={!nextPagePath}>
        Next
      </GatsbyLink>
    </Flex>
  );
};

export type PaginationType = {
  humanPageNumber: number;
  limit: number;
  nextPagePath: string;
  numberOfPages: number;
  pageNumber: number;
  previousPagePath: string;
  skip: number;
};
