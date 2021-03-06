var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz',errors:[] });
});

//Autoload de comandos con :quizId
router.param('quizId',quizController.load);


//Definición de rutas de quizes

router.get('/quizes',                         quizController.index);
router.get('/quizes/:quizId(\\d+)',           quizController.show);
router.get('/quizes/:quizId(\\d+)/answer',    quizController.answer);
router.get('/quizes/add',                     quizController.add);
router.get('/quizes/addreg',                  quizController.addreg);
router.get('/quizes/search',                  quizController.search);
router.get('/quizes/searchshow',              quizController.searchshow);
router.get('/quizes/new',                     quizController.new);
router.get('/quizes/:quizId(\\d+)/edit',      quizController.edit);
router.post('/quizes/create',                 quizController.create);
router.put('/quizes/:quizId(\\d+)',           quizController.update);
router.delete('/quizes/:quizId(\\d+)',        quizController.destroy);

//GET /author
router.get('/author',function(req,res){
    res.render('author',{errors:[]}
    
)});
module.exports = router;
