const Router = require("express");
const  getAnswerController = require("../controllers/ai.controller");
const router = Router();

router.post('/ask/question',getAnswerController.getAnswer) 
// router.post('/ask/question', async (req, res) => {
//     try {
//         const result = await getAnswerController.getAnswer(req, res);
//         const { question } = req.body;
//         const { data } = result;
//         res.render('result', { question, answer: data.output_text });
//     } catch (err) {
//         res.status(500).send('Something went wrong.');
//     }
// });

module.exports = router;