const cron = require('node-cron');
const { Client } = require('pg');
const { v4: uuidv4 } = require('uuid');

// PostgreSQL connection setup
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'password', // replace with your actual password
  database: 'cronjobs',
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

// Cron Job - every 10 seconds
cron.schedule('*/5 * * * * *', async () => {
  const id = uuidv4();
  const meta = {
    source: 'hello',
    status: 'success',
  };

  const hstoreString = Object.entries(meta)
    .map(([k, v]) => `"${k}"=>"${v}"`)
    .join(', ');

  try {
    const res = await client.query(
      `INSERT INTO public.job_logs (id, meta) VALUES ($1, $2::hstore)`,
      [id, hstoreString]
    );

    // const res = await client.query(`SELECT * from job_logs`)
    console.log(`[✓] Job executed with id: `, res);
  } catch (err) {
    console.error('Error:', err);
  }
});

