import 'dotenv/config';

function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 3000),
  mongodbUri: requireEnv('MONGODB_URI'),
  accessSecret: requireEnv('JWT_ACCESS_SECRET'),
  accessExpiresIn: requireEnv('JWT_ACCESS_EXPIRES_IN'),
  refreshSecret: requireEnv('JWT_REFRESH_SECRET'),
  refreshExpiresIn: requireEnv('JWT_REFRESH_EXPIRES_IN'),
};
