import Manga from "../../interface/all";
import { Schema } from 'mongoose';

export const mangaSchema = new Schema<Manga>({
    nome: String,
    descricao: String,
    capitulos: Number,
    status: Boolean
})

