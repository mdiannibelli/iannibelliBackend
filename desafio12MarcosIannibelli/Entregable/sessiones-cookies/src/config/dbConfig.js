import path from "path";
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const dbOptions = {
    mariaDB:{
        client:"mysql",
        connection:{
            host:"127.0.0.1",
            user:"root",
            password:"",
            database:"coderhousedb"
        }
    },
    sqliteDB:{
        client:"sqlite3",
        connection:{
            filename: path.join(__dirname, "../DB/sqliteDB.sqlite")
        },
        useNullAsDefault:true
    },
    mongoAtlasSessions:{
        urlDatabase: "mongodb+srv://Marcos:Marcos2020@cluster0.qc2whqu.mongodb.net/sessionsDB?retryWrites=true&w=majority"
    }
}
