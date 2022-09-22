import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL,
    { useNewUrlParser: true, 
      useUnifiedTopology: true,
     }),
    JogadoresModule,
    CategoriasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
