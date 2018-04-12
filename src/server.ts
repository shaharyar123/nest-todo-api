import * as express from 'express';
import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from "./app/app.module";

const instance = express();
instance.use(bodyParser.json());

//const app = NestFactory.create(ApplicationModule, instance);
//app.listen(4000, () => {
//  console.log('Application is listening on port 3000.')
//});
const app = NestFactory.create(ApplicationModule);
app.then(instance => instance.listen(5000, () => console.log('Application is listening on port 5000')));