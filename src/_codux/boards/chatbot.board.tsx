import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Chatbot',
    Board: () => (
        <div>
            <div>
                <input />
            </div>
        </div>
    ),
    environmentProps: {
        windowBackgroundColor: '#9d0ace',
    },
});
