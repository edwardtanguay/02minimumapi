import express from 'express';

const app = express();
const port = 5300;

app.get('/', (req, res) => {
	res.send('this is a minimalistic api');
});

app.listen(port, () => {
	console.log(`listening at http://localhost:${port}`);
});