import Home from '@pages/Home';
import Line from '@pages/Line';
import MyPage from '@pages/MyPage';
import Operation from '@pages/Operation';
import Station from '@pages/Station';

import { createBrowserRouter } from 'react-router-dom';
import App from 'src/App';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            {
                path: '/station/:status',
                element: <Station />,
            },
            {
                path: '/line/:busId',
                element: <Line />,
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
