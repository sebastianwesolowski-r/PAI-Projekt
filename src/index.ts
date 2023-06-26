import app from './app';

const port = process.env.PORT ?? 8801;

app.listen(port, () => console.log(`server up on port ${port}`));
