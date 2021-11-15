import server from './app';

import 'reflect-metadata';

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
