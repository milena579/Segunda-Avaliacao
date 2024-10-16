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
            },
            {
                source: "/second-page",
                destination:"/segunda-pagina"
            },
            {
                source: "/thirt-page",
                destination:"/terceira-pagina"
            }
        ]
    }
};

export default nextConfig;
