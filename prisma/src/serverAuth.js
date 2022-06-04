import express from 'express';

import { router } from './routesAuth';

const app = express();

app.use(express.json());
app.use(router);


app.listen(3040, console.log('Server listening on port 3040'));