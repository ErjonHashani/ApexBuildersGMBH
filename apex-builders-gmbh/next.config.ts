import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env:{
    MONGODB_URI: "mongodb+srv://dev-api:2cIRcqf0nj5gMgOv@myapplication.qoosxqy.mongodb.net/myapp?retryWrites=true&w=majority",
    NEXTAUTH_SECRET: "your-strong-secret-key-here",
    NEXTAUTH_URL: "http://localhost:3000"
  }
};

export default nextConfig;
