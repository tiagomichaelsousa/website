import * as React from 'react'
import { RecoilRoot } from 'recoil'

// Wraps every page in a component
export const wrapPageElement = ({ element }) => {
  return <RecoilRoot>{element}</RecoilRoot>
}
