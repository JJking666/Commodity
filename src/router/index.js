//该文件专门用于创建整个应用的路由器
import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/demo',component: () => import(/*webpackChunkName:Login*/'../components/Demo.vue') },
        { path: '', redirect: '/login' },
        { path: '/', redirect: '/login' },
        { path: '/login', component: () => import(/*webpackChunkName:Login*/'../components/Login.vue') },
        { path: '/home',
            component: () => import(/*webpackChunkName:Home*/'../components/Home.vue'),
            children: [
                { path: '', redirect: 'test' },
                { path: 'test', component: () => import(/*webpackChunkName:test*/'../pages/Test.vue') },
                { path: 'test1_1', component: () => import(/*webpackChunkName:test*/'../pages/Test1_1.vue') },
                { path: 'test2_1', component: () => import(/*webpackChunkName:test*/'../pages/Test2_1.vue') },
                { path: 'test2_2', component: () => import(/*webpackChunkName:test*/'../pages/Test2_2.vue') },
                { path: 'test3_1', component: () => import(/*webpackChunkName:test*/'../pages/Test3_1.vue') },
                { path: 'test3_2', component: () => import(/*webpackChunkName:test*/'../pages/Test3_2.vue') },
                { path: 'test3_3', component: () => import(/*webpackChunkName:test*/'../pages/Test3_3.vue') },
                { path: 'test4_1', component: () => import(/*webpackChunkName:test*/'../pages/Test4_1.vue') },
                { path: 'test4_1_1', component: () => import(/*webpackChunkName:test*/'../pages/Test4_1_1.vue') },
            ]
        },
    ]
})