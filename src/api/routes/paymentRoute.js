module.exports = (server) => {
    const paymentController = require('../controllers/paymentController');

    const middleware = require("../midllewares/jwtMidlleware");

    
    server.get('/payments', paymentController.getAllPayments);

    
    server.get('/payments/user/:id', paymentController.getPaymentByUserId);


    server.get('payments/allUser', paymentController.getAllPaymentsAllUsers);

   
    server.post('/payments', paymentController.createPayment);

    
    server.delete('/payments/:id', paymentController.deletePayment);
};