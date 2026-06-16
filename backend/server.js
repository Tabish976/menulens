import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Menu AI Backend'));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
