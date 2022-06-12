const {
  getById,
  getAll,
  update,
  updatePassword,
  fetchUserTicket,
  test,
  detailTicket,
} = require('../controllers/user');

const router = require('express').Router();

// router.get("/:id", getById);
router.get('/:id/info', getById);

router.put('/:id', update);
router.put('/changepassword/:id', updatePassword);
router.post('/fetchUserTicket', fetchUserTicket);
router.get('/test', test);

router.get('/', getAll);

router.post('/detailTicket', detailTicket);

module.exports = router;
