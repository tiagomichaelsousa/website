import { render, waitFor } from "@testing-library/react";
import { PersonalInfoFactory } from "@tests/factories/PersonalInfoFactory";
import Job from "./Job";

const personalInfo = PersonalInfoFactory.make();
jest.mock('@hooks/usePersonalInfo', () => {
  return jest.fn().mockImplementation(() => personalInfo);
})

describe('Job section', () => {
  it('should render correctly', async () => {
    const { queryByTitle } = render(
      <Job />
    );

    await waitFor(() => {
      expect(queryByTitle(personalInfo.company.name)).toBeInTheDocument();
      expect(queryByTitle(personalInfo.company.url)).toBeInTheDocument();
    });
  });
});