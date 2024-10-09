/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns: [
        {
            protocol: "https", 
            hostname: "dragonball-api.com"
        },
    ],
    },
    rewrites : () => {
        return [
            {
                source: "/first-page",
                destination: "/primeira-pagina"
            }
        ]
    }
};

export default nextConfig;
