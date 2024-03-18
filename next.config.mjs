/** @type {import('next').NextConfig} */
import webpack from 'webpack'

const nextConfig = {
    webpack: (config, { dev, isServer }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })
        );

        return config;
    }

}




export default nextConfig;


