const routes = require ('express').Router();

routes.get('/', (req, res) =>{
    res.send('Lesliee Cruz');
});

module.exports = routes