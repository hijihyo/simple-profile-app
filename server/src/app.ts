import express from 'express';
import session from 'express-session';
import { createConnection } from 'typeorm';
import router from './routes';
import './env';

// interface SessionUser {
//     id: number;
//     username: string;
// }

// declare module 'express-session' {
//     interface SessionData {
//         user: SessionUser | undefined
//     }
// }
declare module 'express-session' {
    export interface SessionData {
      user: { [key: string]: any };
    }
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const sessionConfig = {
    secret: process.env.JWT_SECRET || '!@#$%^&*()',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: false, maxAge: 3600000 }
}
// if (process.env.NODE_ENV === 'prod') {
//     app.set('trust proxy', 1);
//     session.cookie.secure = true;
// }
app.use(session(sessionConfig))

app.use('/api', router);

(async (): Promise<void> => {
    try {
        await createConnection();
        console.log('DB connection established');
    } catch (err) {
        console.error(`[ERR] DB Connection: ${err}`);
    }
})();

export default app;
