import { Sequelize } from 'sequelize-typescript';
import { Orden } from 'src/ecommerce/entities/orden.model';
import { Usuario } from '../global/entities/usuario.model';

export const databaseProviders = [
	{
		provide: 'GLOBAL_SEQUELIZE',
		useFactory: async () => {

			// Usuario.hasMany(Orden, {foreignKey: 'IdUsuario', as: 'ordenes'})
			const sequelize = new Sequelize({
				dialect: 'mysql',
				host: 'localhost',
				port: 3306,
				username: 'root',
				password: 'fullmoon96',
				database: 'global',
				models: [Usuario, Orden],
				// schema: 'global',
			});
			// sequelize.getQueryInterface().showIndex()

			//@ts-ignore
			sequelize.dialect.supports.schemas = true;      
			// sequelize.addModels([Usuario]);

			// // Usuario.hasMany(Orden, {foreignKey: 'IdUsuario', as: 'ordenes'})
			 
			

			// sequelize.addModels([Orden])


			

			// await sequelize.sync({alter: true});
			return sequelize;
		},
	},
	// {
	// 	provide: 'ECOMMERCE_SEQUELIZE',
	// 	useFactory: async () => {
	// 		const sequelize = new Sequelize({
	// 			dialect: 'mysql',
	// 			host: 'localhost',
	// 			port: 3306,
	// 			username: 'root',
	// 			password: 'fullmoon96',
	// 			database: 'ecommerce',
	// 			// schema: 'ecommerce1'
	// 		});

	// 		//@ts-ignore
	// 		sequelize.dialect.supports.schemas = true;      
	// 		sequelize.addModels([ Orden ]);
			
			 
	// 		// await sequelize.sync({alter: true});

	// 		Usuario.hasMany(Orden, {foreignKey: 'IdUsuario', as: 'ordenes'})

	// 		Orden.belongsTo(Usuario, {foreignKey: 'IdUsuario', as: 'customer'})
	// 		return sequelize;
	// 	},
	// },	
];