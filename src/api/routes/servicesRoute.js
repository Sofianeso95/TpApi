module.exports = (server) => {
    const serviceController = require('../controllers/serviceController');
    
   
    server.get('/services', serviceController.getAllServices);
    
    
    server.get('/services/:id', serviceController.getServiceById);
    
   
    server.post('/services', serviceController.createService);
    
    
    server.put('/services/:id', serviceController.updateService);
    
    
    server.delete('/services/:id', serviceController.deleteService);
    
    
    server.get('/services/users', serviceController.getServiceUsers);
    
    
    server.get('/services/up', serviceController.getServiceUp);
    };