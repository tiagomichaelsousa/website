export type About = {
  about: Section;
};

type Section = {
  left: Content[];
  right: Content[];
};

export type Content = {
  title: string;
  description: string;
  icon: {
    svg: {
      content: string;
    };
  };
};
