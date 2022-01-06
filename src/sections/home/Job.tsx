import { Container, Flex, GatsbyImage, Heading, Link } from '@components';
import React from 'react';
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import usePersonalInfo from '@hooks/usePersonalInfo';

const Job: React.FC = () => {
  const personalInfo = usePersonalInfo();

  return (
    <Container size="3" as="section">
      <Flex align="center" direction="column">
        <Heading size="6" color="primary">
          Currently
        </Heading>
        <Heading size="5" css={{ mt: '$8' }}>
          Working at
        </Heading>
      </Flex>

      <Flex align="center" justify="center" css={{ mt: '$64' }} gap="24">
        <Link href={personalInfo.company.url} title={personalInfo.company.url} target="_blank" rel="noreferrer">
          <GatsbyImage
            image={getImage(personalInfo.company.logo) as IGatsbyImageData}
            alt={personalInfo.company.name}
            title={personalInfo.company.name}
          />
        </Link>
      </Flex>
    </Container>
  );
};

export default Job;
