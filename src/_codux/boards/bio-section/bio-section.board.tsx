import { createBoard } from '@wixc3/react-board';
import { BioSection } from '../../../components/bio-section/bio-section';

export default createBoard({
    name: 'BioSection',
    Board: () => <BioSection />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
        canvasPadding: {
            right: 10
        },
    }
});
