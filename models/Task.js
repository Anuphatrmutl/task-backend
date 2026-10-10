const mongoose = require('mongoose');

// 1. สร้างพิมพ์เขียว (Schema)
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// 2. แปลงพิมพ์เขียวให้กลายเป็น Model
const Task = mongoose.model('Task', taskSchema);

// 3. ส่งออกไปให้ไฟล์อื่นเอาไปใช้งาน (ส่วนนี้ที่ทำให้ server.js รู้จักคำสั่ง)
module.exports = Task;