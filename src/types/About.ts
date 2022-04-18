export type About = {
  about: Section;
};

type Section = {
  left: Content[];
  right: Content[];
};

type Content = {
  title: string;
  description: string;
  icon: {
    childSvg: {
      content: {
        data: string;
      };
    };
  };
};
