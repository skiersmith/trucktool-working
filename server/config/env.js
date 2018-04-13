// LOCAL DEV VARIABLES
// let env = {
// 	NODE_ENV: 'development',
// 	PORT: 5000,
// 	DBPROTOCOL: 'mongodb',
// 	DBUSERNAME: 'trucktool2',
// 	DBPASSWORD: 'trucktool2',
// 	DBHOST: 'ds012578.mlab.com:12578',
// 	DBNAME: 'trucktool',
// 	SERVERNAME: 'dev-server'

// }
// let env = {
// 	NODE_ENV: 'development',
// 	PORT: 5000,
// 	DBPROTOCOL: 'mongodb',
// 	DBUSERNAME: 'user',
// 	DBPASSWORD: 'user',
// 	DBHOST: 'ds014118.mlab.com:14118',
// 	DBNAME: 'trucktool-dev',
// 	SERVERNAME: 'dev-server'

// }

let env = {
	NODE_ENV: 'production',
	PORT: 5000,
	DBPROTOCOL: 'mongodb',
	DBUSERNAME: 'trucktoolprimary',
	DBPASSWORD: 'trucktool',
	DBHOST: 'ds014298-a0.mlab.com:14298',
	DBNAME: 'trucktool',
	SERVERNAME: 'dev-server'
}
// mongodb://<dbuser>:<dbpassword>@ds014118.mlab.com:14118/trucktool-dev
// mongodb://<dbuser>:<dbpassword>@ds014298-a0.mlab.com:14298,ds014298-a1.mlab.com:14296/trucktool?replicaSet=rs-ds014298
Object.keys(env).forEach(v => {
	process.env[v] = process.env[v] || env[v]
}) 


// MongoDb Connection String Builder
env.CONNECTIONSTRING = `${env.DBPROTOCOL}://${env.DBUSERNAME}:${env.DBPASSWORD}@${env.DBHOST}/${env.DBNAME}`
process.env.CONNECTIONSTRING = env.CONNECTIONSTRING

exports = env