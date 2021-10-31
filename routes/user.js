const router = require('express').Router();

router.put('/:id', async (req, res) => {});

module.exports = router;

// 테스트
// router.get('/usertest', (req, res) => {
//   res.send('user test is successfull');
// });

// router.post('/userposttest', (req, res) => {
//   const username = req.body.username;
//   res.send(`your username is: ${username}`);
// });
