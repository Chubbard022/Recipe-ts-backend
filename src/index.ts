import 'reflect-metadata';
import express from 'express';



const main = () =>{
    const app: express.Application = express();

    app
    .set('port', '8000')
    .set('env', 'development')
    .listen(app.get('port'), () => console.log(`running backend on port ${app.get('port')}`));
}
main()