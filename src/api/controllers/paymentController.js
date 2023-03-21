

const db = require("../../db");




exports.getAllPayments = function(req, res) {
    db.query('SELECT * FROM tipsPayments', function(error, results) {
        if (error) throw error;
        res.json(results);
    });
};


exports.getPaymentByUserId = function(req, res) {
    const userId = req.params.id;
    db.query('SELECT users.*, SUM(tipspayments.amount) AS soldeTotal FROM users INNER JOIN tipspayments ON users.id = tipspayments.id_user WHERE users.id = ?', [userId], function(error, results) {
        if (error) throw error;
        res.json(results);
    });
};

exports.getAllPaymentsAllUsers = function(req, res) {
    const userId = req.params.id;
    db.query('SELECT users.*, SUM(tipspayments.amount) AS soldeTotal FROM users INNER JOIN tipspayments ON users.id = tipspayments.id_user GROUP BY users.id', [userId], function(error, results) {
        if (error) throw error;
        res.json(results);
    });
};


exports.createPayment = function(req, res) {
    const { amount, id_user } = req.body;
    db.query('INSERT INTO tipsPayments (amount, id_user) VALUES (?, ?)', [amount, id_user], function(error, results) {
        if (error) throw error;
        res.json({ id: results.insertId });
    });
};


exports.deletePayment = function(req, res) {
    const paymentId = req.params.id;
    db.query('DELETE FROM tipsPayments WHERE id = ?', [paymentId], function(error) {
        if (error) throw error;
        res.json({ message: 'Payment deleted successfully.' });
    });
};