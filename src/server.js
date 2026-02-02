import express from 'express';
import path from 'path'
import dotenv from 'dotenv';
//import cookieParser from 'cookie-parser';
// import connectDB from './config/db.js';
// import { notFound, errorHandler } from './middleware/errorMiddleware.js';
// import studentRoutes from './routes/studentRoutes.js'
//import teacherRoutes from './routes/teacherRoutes.js'
//import subjectRoutes from './routes/subjectRoutes.js'
//import uploadRoutes from './routes/uploadRoutes.js'
//import planRoutes from './routes/planRoutes.js'
//import studentQuestionsRoutes from './routes/studentQuestionsRoutes.js'
//import teacherQuestionsRoutes from './routes/teacherQuestionsRoutes.js'
//import teacherPaymentRoutes from './routes/teacherPaymentRoutes.js'
//import multer  from 'multer'; 
//import {fileURLToPath} from 'url';

dotenv.config()

//connectDB()

const app = express()

app.use(express.json())
//app.use(cookieParser());

 //const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.resolve() 

 //var upload = multer({ dest: path.dirname(__filename) + '/public/uploads/' });
 //var type = upload.single('upl');

// app.use('/api/students', studentRoutes);
// app.use('/api/teachers', teacherRoutes);
// app.use('/api/subjects', subjectRoutes);
// app.use('/api/plans', planRoutes);
// app.use('/api/studentquestions', studentQuestionsRoutes); 
// app.use('/api/teacherquestions', teacherQuestionsRoutes); 

// app.use('/api/teacherpayments', teacherPaymentRoutes);

// app.use('/api/upload', type,  uploadRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}


//app.use(notFound)
//app.use(errorHandler)


const PORT = process.env.PORT  || 5000
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on ${PORT}`))

export default app;
