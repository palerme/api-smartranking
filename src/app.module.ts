import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:3mJoBl1Jac9gHQiw@cluster0.eaffz6i.mongodb.net/smartrankingapi',
    { useNewUrlParser: true, useCreateIndex: true, UseUnifiedTopology: true, useFindAndModify: false }),
    JogadoresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
