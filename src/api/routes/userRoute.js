module.exports = (server) => {
    const userController = require('../controllers/userController');
    
    



    server.get("/users/verifAdmin", userController.verifAdmin);

    
    server.get('/users', userController.getAllUsers);
    
    
    server.get('/users/:id', userController.getUserById);
    
 
    server.post('/users', userController.createUser);
    
   
    server.put('/users/:id', userController.updateUser);
    
    
    server.delete('/users/:id', userController.deleteUser);
    
    };