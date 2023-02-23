import { useCallback } from 'react';
import { useScrollY } from '@hooks/useScroll';
import { CaretUpIcon } from '@radix-ui/react-icons';
import { Svg, Tooltip, TooltipContent, TooltipTrigger, StyledArrow, TooltipProvider } from '@components';

export default function ScrollTop() {
    const offset = 256;
    const scrollY = useScrollY();
    const doScroll = useCallback(
        () => window.scrollTo({ top: 0, behavior: 'smooth' }),
        [],
    );

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Svg
                        color="white"
                        size="32"
                        css={{
                            p: '$16',
                            bc: '$primary',
                            br: '$circle',
                            position: 'fixed',
                            right: '$32',
                            bottom: '$32',
                            boxShadow: '$primary',
                            transitionDuration: '300ms',
                            transform: offset > scrollY ? 'translateY(100px)' : 'translateY(0px)',
                            '@hover': {
                                '&:hover': {
                                    cursor: 'pointer',
                                },
                            },
                        }}>
                        <CaretUpIcon onClick={doScroll} />
                    </Svg>
                </TooltipTrigger>
                <TooltipContent>
                    Scroll to Top
                    <StyledArrow />
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
