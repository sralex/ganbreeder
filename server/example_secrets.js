// Update with your config settings.
module.exports = {
    ganurl256: "http://localhost:5000",
    database: {
        client: 'postgresql',
        connection: {
            host: "",
            database: '',
            user:     '',
            password: ''
        },
        pool: {
            min: 2,
            max: 20
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },
    images_root: 'http://localhost:8888/img/',
    local_images: true,
    aws: {
        accessKeyId: '',
        secretAccessKey: ''
    }
};
