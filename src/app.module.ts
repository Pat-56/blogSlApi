		import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
		
		@Module({
		  imports: [
		    TypeOrmModule.forRoot({
		      type: 'postgres', // ou 'postgres' selon votre choix
		      host: 'localhost', // ou l'adresse IP si c'est une autre machine
		      port: 5432, // le port de votre base de données
		      username: 'pat',
		      password: 'JhAmDl28122021.',
		      database: 'blogslapi',
		      entities: [__dirname + '/**/*.entity{.ts,.js}'],
		      synchronize: true, // ne pas utiliser en production, cela synchronise les entités avec la base de données
		    }),
		    UsersModule,
		  ],
		  controllers: [AppController],
		  providers: [AppService],
		})
		export class AppModule {}

