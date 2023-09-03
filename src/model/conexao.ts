import mongoose from "mongoose";
import "dotenv/config";

export const mongoConect = async (): Promise<void> => {
    const user: any = process.env.ATLAS_USER;
    const pass: any = process.env.ATLAS_PASS;
    const url: string = `mongodb+srv://${user}:${pass}@cluster0.nsdmv7k.mongodb.net/obras?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(url)
        console.log('Conexão com o MongoDB Atlas estabelecida com sucesso');
    } catch (error) {
        console.error('Erro na conexão com o MongoDB Atlas:', error);
    }
}
