import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/icon',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/table',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tabs',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/VueEditor.vue'),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: () => import(/* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
                    meta: { title: 'markdown编辑器' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: () => import(/* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: () => import(/* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: () => import(/* webpackChunkName: "drag" */ '../components/page/DragList.vue'),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 拖拽Dialog组件
                    path: '/dialog',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/DragDialog.vue'),
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 国际化组件
                    path: '/i18n',
                    component: () => import(/* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
                    meta: { title: '国际化' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
                {
                    path: '/donate',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/Donate.vue'),
                    meta: { title: '支持作者' }
                },
                {
                    path: '/filmlibrary',
                    component: () => import('../components/page/filmmanagement/Filmlibrary.vue'),
                    meta: { title: '影片库' }
                },
                {
                    path: '/recentfilms',
                    component: () => import('../components/page/filmmanagement/RecentFilms.vue'),
                    meta: { title: '近期影片' }
                },
                {
                    path: '/projectionhallmanager',
                    component: () => import('../components/page/projectionhall/ProjectionHallManager.vue'),
                    meta: { title: '放映厅管理' }
                },
                {
                    path: '/scenearrange',
                    component: () => import('../components/page/projectionhall/SceneArrange.vue'),
                    meta: { title: '场次安排' }
                },
                {
                    path: '/ordermanager',
                    component: () => import('../components/page/ordermanager/OrderManager.vue'),
                    meta: { title: '订单管理' }
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        },
        {
            path: '/filmIndex',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/user/FilmIndex.vue'),
            meta: { title: '电影院首页' }
        },
        {
            path: '/filmexclusivepiece',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/user/FilmExclusivePiece.vue'),
            meta: { title: '电影排片' }
        },
        {
            path: '/filmintroduce',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/user/FilmIntroduce.vue'),
            meta: { title: '电影简介' }
        },
        {
            path: '/filmscore',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/user/FilmScore.vue'),
            meta: { title: '评分' }
        },
        {
            path: '/seatselection',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/user/SeatSelection.vue'),
            meta: { title: '在线选座' }
        },
        {
            path: '/order',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/user/Order.vue'),
            meta: { title: '生成订单' }
        },
        {
            path: '/my',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/my/My.vue'),
            meta: { title: '我的' }
        },
        {
            path: '/setinfo',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/my/SetInfo.vue'),
            meta: { title: '我的信息修改' }
        },
        {
            path: '/myorder',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/my/MyOrder.vue'),
            meta: { title: '我的订单' }
        },
        {
            path: '/myfilm',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/my/MyFilm.vue'),
            meta: { title: '想看的电影' }
        },
        {
            path: '/setsafe',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/my/SetSafe.vue'),
            meta: { title: '安全设置' }
        }
    ]
});
