/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  //for static build :
  output: "export",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
