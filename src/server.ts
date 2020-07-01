import app from './app';

const port: number | string = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`⚡️Server listening on http://localhost:${port}`);
});
