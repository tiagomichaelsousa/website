/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { getCssText } from './src/theme/stitches.config';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <style
      key="stitches"
      id="stitches"
      dangerouslySetInnerHTML={{
        __html: getCssText(),
      }}
    />,
  ]);
};
