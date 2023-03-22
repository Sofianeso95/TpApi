module.exports = (server) => {
    const paymentController = require('../controllers/paymentController');

    
    const middleware = require("../midllewares/jwtMidlleware");

    
    server.get('/payments',middleware.verifyToken, paymentController.getAllPayments);

    
    server.get('/payments/user/:id',middleware.verifyToken, paymentController.getPaymentByUserId);


    server.get('payments/allUser',middleware.verifyToken, paymentController.getAllPaymentsAllUsers);

   
    server.post('/payments',middleware.verifyToken, paymentController.createPayment);

    
    server.delete('/payments/:id', paymentController.deletePayment);
};