import { mangaSchema } from "../collection/mangas";
import { mongoConect } from "../conexao";
import { model } from "mongoose";
import Manga from "../../interface/all"

const mangaschema = model<Manga>("Mangas", mangaSchema)

async function Execute(): Promise<void> {
    try {

        await mongoConect();
        const obra = new mangaschema({
            nome:"Jujutsu Kaisen",
            descricao:"Jujutsu Kaisen é um anime que adapta o mangá criado (escrito e ilustrado) por Gege Akutami, que também ganhará um longa em breve, chamado Jujutsu Kaisen 0. O anime é produzido pelo estúdio MAPPA sob a direção de Sunghoo Park, a série animada foi lançada em outubro de 2020. Mesmo contando apenas com uma temporada lançada até o momento, o sucesso é inegável e isso alavancou as vendas do mangá, que já possui mais de 45 milhões de cópias em circulação.",
            capitulos:233,
            status:false
        })

        await obra.save()
        console.log(obra)

    } catch (err) {
        console.log("erro ao cadastra obra", err)
    }
}

Execute();