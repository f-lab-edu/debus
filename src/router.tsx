import Home from '@pages/Home';
import Lines from '@pages/Lines';
import MyPage from '@pages/MyPage';
import Operation from '@pages/Operation';
import Stations from '@pages/Stations';

import { createBrowserRouter } from 'react-router-dom';
import App from 'src/App';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            {
                path: '/stations/:status',
                element: <Stations />,
            },
            {
                path: '/lines/:busId',
                element: <Lines />,
            },
            {
                path: '/my-page',
                element: <MyPage />,
            },
        ],
    },
    {
        path: '/my-operation',
        element: <Operation />,
        children: [
            {
                path: '/my-operation/chat',
                element: <Operation />,
            },
        ],
    },
]);
