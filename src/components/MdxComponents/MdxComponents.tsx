import React from 'react';
import { Code, GatsbyLink, Heading, Link, List, ListItem, Paragraph, Pre, Img, Blockquote } from '@components';
import { styled } from '@theme/stitches.config';
import { MDXProvider as MDXJsProvider } from '@mdx-js/react';
import { MDXRenderer as GatsbyMDXRenderer } from 'gatsby-plugin-mdx';

const MdxComponents = {
  h1: (props: any) => <Heading size="1" anchor id={`${props.children}`} css={{ mt: '$16', mb: '$8' }} {...props} />,
  h2: (props: any) => <Heading size="2" anchor id={`${props.children}`} css={{ mt: '$16', mb: '$8' }} {...props} />,
  h3: (props: any) => <Heading size="3" anchor id={`${props.children}`} css={{ mt: '$16', mb: '$8' }} {...props} />,
  h4: (props: any) => <Heading size="4" anchor id={`${props.children}`} css={{ mt: '$16', mb: '$8' }} {...props} />,
  h5: (props: any) => <Heading size="5" anchor id={`${props.children}`} css={{ mt: '$16', mb: '$8' }} {...props} />,
  h6: (props: any) => <Heading size="6" anchor id={`${props.children}`} css={{ mt: '$16', mb: '$8' }} {...props} />,
  p: (props: any) => <Paragraph css={{ lh: '$40', mb: '$24' }} {...props} />,
  a: ({ href = '', ...props }) => {
    if (href.startsWith('http')) {
      return <Link href={href} title={href} target="_blank" rel="noreferrer" variant="primary" {...props} />;
    }

    return <GatsbyLink to={href} title={href} variant="primary" {...props} />;
  },
  img: (props) => {
    return (
      <Img
        css={{
          boxShadow: '$primary',
          display: 'block',
          mx: 'auto',
          '@initial': {
            width: '100%',
          },
          '@bp1': {
            width: '50%',
          },
        }}
        {...props}
      />
    );
  },
  code: (props: any) => <Code {...props} />,
  pre: ({ children }) => (
    <Pre
      showLineNumbers={children.props.showLineNumbers}
      theme={children.props.theme}
      dots={children.props.dots && /true/i.test(children.props.dots)}
      filename={children.props.filename}
      copy={children.props.copy && /true/i.test(children.props.copy)}
    >
      {children}
    </Pre>
  ),
  ul: (props: any) => <List {...props} />,
  li: (props: any) => <ListItem {...props} />,
  blockquote: ({ children, ...props }) => (
    <Blockquote {...props}>
      <Paragraph fontWeight="bold" css={{ mr: '$8' }}>
        NOTE:
      </Paragraph>
      {children}
    </Blockquote>
  ),
};

export const MDXProvider = styled(MDXJsProvider, {});

export const MDXRenderer = styled(GatsbyMDXRenderer, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$16',
});

export default MdxComponents;
