module.exports = {
  reactStrictMode: true,
  env: {
    PROJECT_ID: process.env.PROJECT_ID,
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};
