module.exports = {
    base: '/f-ui/',
    title: 'FUI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '文档', link: 'https://github.com/fxq-zah/f111'},
            {text: '交流', link: '/'},
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/tabs',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/popover',
                    '/components/collapse',
                ]
            },

        ]
    }
}