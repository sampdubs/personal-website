import { createBoard } from '@wixc3/react-board';
import { Project } from '../../../components/project/project';

export default createBoard({
    name: 'Project',
    Board: () => <Project />,
    isSnippet: true,
});
