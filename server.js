const express = require('express');
const app = express();

const data = [
	{
		_id: 1,
		body: '123'
	},
	{
		_id: 2,
		body: '321'
	},
];

app.get('/data', (req, res) => {
	res.send(JSON.stringify(data));
});

app.listen(8089, () => {
	console.log('Server started 123');
});
