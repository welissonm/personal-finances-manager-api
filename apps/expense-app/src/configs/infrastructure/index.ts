
export interface InfrastructureConfig {
  port: number;
  database: {
    url: string | {
      host: string;
      user: string;
      port?: number;
      password: string;
      database: string;
    }
  }
};

const configFactory = (): InfrastructureConfig  => (Object.freeze({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    url: process.env.DATABASE_URL,
  }
}));

export default configFactory;