import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://papadadelporco:kHgNNmbo50v8FGfB@cluster0.eaffz6i.mongodb.net/smartrankingapi',
    { useNewUrlParser: true, 
      useUnifiedTopology: true,
     }),
    JogadoresModule,
    CategoriasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
