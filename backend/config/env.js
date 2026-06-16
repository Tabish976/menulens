export const loadEnv = () => {
  return {
    PORT: process.env.PORT || 4000,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/menu-ai-app',
    JWT_SECRET: process.env.JWT_SECRET || 'replace-me',
  };
};
