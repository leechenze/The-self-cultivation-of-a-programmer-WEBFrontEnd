import { defineConfig } from 'umi';

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    //   routes: [
    //     { path: '/', component: '@/pages/index' },
    //   ],
    fastRefresh: {},
    proxy: {
        '/api': {
            'target': 'http://public-api-v1.aspirantzhang.com/',
            'changeOrigin': true,
            'pathRewrite': { '^/api': '' },
        },
    },
});
