import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';
mongoose.set('strictQuery', true);


mongoose.connect('mongodb+srv://evertonlino:evertonqq123@my-app.4mpoudi.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        const app = express();
        const port = 2001;

        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
        app.use(express.json());
        app.use(router);

        app.listen(port, () => {
            console.log(`🚀 Server is running on http://localhost:${port}`);
        });
    })
    .catch(() => console.log('Erro ao conectar com o mongoDB!!'));
