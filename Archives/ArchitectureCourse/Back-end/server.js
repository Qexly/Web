import express from 'express';
import cors from 'cors';

import {
  start, 
  getGameStatus, 
  getGooglePosition, 
  playAgain, 
  getPlayerPosition,
  getGridSize,
  getPlayerPoints,
  getGooglePoints,
  movePlayer,
  subscribe,
  unsubscribe
} from '../Core/state-manager-server.js';

// аналогия создания компонента 
const app = express();

app.use(cors());

const port = 3000;

// Маршрут для отправки событий Server-Sent Events (SSE)
app.get('/events', (req, res) => {
  // Устанавливаем заголовки для SSE
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const observer = (e) => {
    const data = JSON.stringify(e);
    res.write(`data: ${data}\n\n`);
  };

  subscribe(observer);

  req.on('close', () => {
    unsubscribe(observer);
    res.end();
  });

});

// при гет запросе на корень - вызови колбэк
app.get('/getGooglePosition', async (req, res) => {
  const data = await getGooglePosition();
  res.send({data});
});

app.get('/start', async (req, res) => {
  await start();
  res.status(200).send('ok');
});

app.get('/playAgain', async (req, res) => {
  await playAgain();
  res.send(200);
});

app.get('/getGameStatus', async (req, res) => {
  const data = await getGameStatus();
  res.send({data});
});

app.get('/getPlayerPosition', async (req, res) => {
  let playerNumber = req.query.playerNumber;
  const data = await getPlayerPosition(playerNumber);
  res.send({data});
});

app.get('/getGridSize', async (req, res) => {
  const data = await getGridSize();
  res.send({data});
});

app.get('/getPlayerPoints', async (req, res) => {
  let playerNumber = req.query.playerNumber;
  const data = await getPlayerPoints(playerNumber);
  res.send({data});
});

app.get('/getGooglePoints', async (req, res) => {
  const data = await getGooglePoints();
  res.send({data});
});

app.get('/movePlayer', async (req, res) => {
  let playerNumber = req.query.playerNumber;
  let direction = req.query.direction;
  const data = await movePlayer(playerNumber, direction);
  res.send(200);
});

// запускаем сервер на порту 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});