module.exports = (server) => {
    const adminController = require('../controllers/adminController');
    
    // Récupération de tous les services
    server.get('/admin', adminController.getAllTips);
    
    // Récupération d'un service par son ID
    server.get('/admin/:id', adminController.getAdminById);
    
    // Création d'un nouveau service
    server.post('/admin', adminController.createAdmin);
    
    // Mise à jour d'un service par son ID
    server.put('/admin/:id', adminController.updateAdmin);
    
    // Suppression d'un service par son ID
    server.delete('/admin/:id', adminController.deleteAdmin);
    
    };