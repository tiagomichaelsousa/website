import { fireEvent, render, waitFor } from "@testing-library/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./Tooltip";

describe('Svg', () => {
  it('should render correctly', async () => {
    const testId = 'tooltip-trigger';
    const onClick = jest.fn();

    const { queryByTestId } = render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger onClick={onClick} data-testid={testId} asChild>
            <div>Trigger</div>
          </TooltipTrigger>
          <TooltipContent>Tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    await waitFor(() => {
      const trigger = queryByTestId(testId);
      expect(trigger).toBeInTheDocument();

      if(!trigger) {
        throw new Error('Trigger not found');
      }

      fireEvent.click(trigger);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});