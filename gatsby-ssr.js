/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { getCssText } from './src/theme/stitches.config';
import { RecoilRoot } from 'recoil'

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

// Wraps every page in a component
export const wrapPageElement = ({ element }) => {
  return <RecoilRoot>{element}</RecoilRoot>
}
