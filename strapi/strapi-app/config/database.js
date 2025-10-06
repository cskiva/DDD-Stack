module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'supabase-db'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'rEtajGWTuuPMHTZnEZS839B806ha0xTMWzWFyJH3GvAuhsWATV'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
