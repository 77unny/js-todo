const MOCK_BOARD = {
    status: 'SUCCESS',
    content: [
        {
            id: 1,
            title: '해야할 일',
            createDateTime: '2020-04-15 03:12:00',
            updateDateTime: '2020-04-15 03:12:00',
            cards: [
                {
                    id: 1,
                    title: 'README.md 추가',
                    content: '구현 API 내용 작성',
                    createDateTime: '2020-04-15 03:12:32',
                    updateDateTime: '2020-04-15 03:13:00',
                    author: 'nigayo',
                },
                {
                    id: 1,
                    title: 'README.md 추가',
                    content: '해야할 일이지롱',
                    createDateTime: '2020-04-15 03:12:32',
                    updateDateTime: '2020-04-15 03:13:00',
                    author: 'nigayo',
                },
            ],
        },
        {
            id: 2,
            title: '하고 있는 일',
            createDateTime: '2020-04-15 03:12:00',
            updateDateTime: '2020-04-15 03:12:00',
            cards: [
                {
                    id: 1,
                    title: 'README.md 추가',
                    content: '하고 있는 일에 추가!',
                    createDateTime: '2020-04-15 03:12:32',
                    updateDateTime: '2020-04-15 03:13:00',
                    author: 'nigayo',
                },
            ],
        },
        {
            id: 3,
            title: '완료된 일',
            createDateTime: '2020-04-15 03:12:00',
            updateDateTime: '2020-04-15 03:12:00',
            cards: [],
        },
    ],
};

export { MOCK_BOARD };
