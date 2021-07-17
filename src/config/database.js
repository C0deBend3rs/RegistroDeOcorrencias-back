module.exports = {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: false,
            rejectUnauthorized: false
        },
        keepAlive: true
    },
    ssl: false,
    logging: false,
    seederStorage: 'sequelize',
    host: 'ec2-23-20-124-77.compute-1.amazonaws.com',
    username: 'zxmephawbcrshu',
    password: '0c6389d91167416670eb09bdba70ea7049687a473f24826a3febaa829c47a555',
    port: '5432',
    database: 'ddkfdanrjt0kg',
    define: {
        underscored: true
    },
};
