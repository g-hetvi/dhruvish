const ChatHistorymodel = require('../models/openai.model')
const OpenAI = require('openai');


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
}); 
 
module.exports.getAnswer = async (req, res) => {
    try {
        const { question } = req.body; 
        const userMessage =  await ChatHistorymodel.create({ role: "user", content: question });
        await userMessage.save();

        let chatHistory = [{ role: "user", content: question }]; 
        
        const question_answer = await  openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: chatHistory,
        });

        const output_text = question_answer.choices[0].message.content;
 
        const assistantMessage = new ChatHistorymodel({ role: "assistant", content : output_text });
        await assistantMessage.save();

        // return res.json({ status: true, message: "successful", data: { output_text } });
        res.render('answer', {
            question,
            output_text,
        });
    } catch (err) {
        console.log(err);
        return res.json({ status: false, message: err.message });
    }
};