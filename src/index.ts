import express,{Request, Response, Application} from "express";
import AppDataSource from "./dbConnect";
import routes from "./routes";
const app:Application = express();
const PORT = 3030;

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
});

app.use('/api/v1', routes);

app.get('/', (req:Request, res:Response) => {
    res.send("Working...");
})

app.listen(PORT, () => {
    console.log("Server runing...",PORT);
})