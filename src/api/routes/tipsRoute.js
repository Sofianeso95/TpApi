module.exports = (server) => {
    const tipsController = require("../controllers/tipsController");
    
    server.get("/tips", tipsController.getAllTips);
  
    
    server.get("/tips/tipService", tipsController.getTipServiceUp);
  
   
    server.get("/tips/all", tipsController.getTotalTipsByMonth);
  
    
    server.get("/tips/:id", tipsController.getTipById);
  
    
    server.post("/tips", tipsController.createTip);
  
    
    server.put("/tips/:id", tipsController.updateTip);
  
    
    server.delete("/tips/:id", tipsController.deleteTip);
  
    
  };