import '@testing-library/jest-dom'

jest.mock("gatsby-plugin-image", () => {
  const React = require("react");
  const plugin = jest.requireActual("gatsby-plugin-image");

  const mockImage = ({imgClassName, ...props}) => {
    return React.createElement("img", {
      ...props,
      className: imgClassName,
    });
  };
    
  return {
    ...plugin,
    GatsbyImage: jest.fn().mockImplementation(mockImage),
    StaticImage: jest.fn().mockImplementation(mockImage),
  }
})

jest.mock('copy-to-clipboard');