import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { EcommerceModule } from './ecommerce/modules/ecommerce.module';
import { GlobalModule } from './global/modules/global.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from './global/entities/usuario.model';
import { Orden } from './ecommerce/entities/orden.model';
import { DatabaseModule } from './modules/database.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		// SequelizeModule.forRoot({
		// 	name: 'global',
		// 	dialect: 'mysql',
		// 	host: 'localhost',
		// 	username: 'root',
		// 	password: 'fullmoon96',
		// 	database: 'global',
		// 	schema: 'global',
		// 	// models: [Usuario],
		// 	autoLoadModels: true,
		// 	synchronize: true,
		// 	// sync:{alter:true},
		// }),
		SequelizeModule.forRoot({
			name: 'main',
			dialect: 'mysql',
			host: 'localhost',
			username: 'root',
			password: 'fullmoon96',
			// database: 'ecommerce',
			schema: 'ecommerce',
			// models: [Orden, Usuario],
			autoLoadModels: true,
			synchronize: true,
			// sync:{alter:true},
		}),
		

		// DatabaseModule,
		GlobalModule,
		EcommerceModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
