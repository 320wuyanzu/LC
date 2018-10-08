module.exports = {
    head: [
        ['link', { rel: 'stylesheet', href: '/katex.min.css' }]
    ],
    base: '/LC/',
    title: 'C语言摘要',
    description: 'C语言复习',
    themeConfig: {
        lastUpdated: '最后一次编辑',
        nav: [
            { text: 'Personal Homepage', link: 'https://320wuyanzu.github.io' },
            { text: 'Index', link: '/' },
            { text: 'Source', link: 'https://en.cppreference.com/w/c' }
        ],
        sidebarDepth: 2,
        sidebar: sidebar_group()
    },
    markdown: {
        config: md => {
            md.use(require('@iktakahiro/markdown-it-katex'));
        }
    }
}


function sidebar_group() {
    let C1 = {
        title: '语言核心',
        children: ['/']
    };

    let C2 = {
        title: '标准库',
        children: ['/stdlib.md']
    };

    let C3 = {
        title: '一、基本概念',
        children: ['/1/1.md']
    };
    /*
    let C4 = {
        title: '四、多元函数微积分学',
        children: ['/4/']
    };
    let C5 = {
        title: '五、常微分方程',
        children: ['/5/']
    };
    let C6 = {
        title: '六、行列式',
        children: ['/6/']
    };
    let C7 = {
        title: '七、矩阵',
        children: ['/7/']
    };
    let C8 = {
        title: '八、向量',
        children: ['/8/']
    };
    let C9 = {
        title: '九、线性方程组',
        children: ['/9/']
    };
    let C10 = {
        title: '十、矩阵的特征值和特征向量',
        children: ['/10/']
    };
    let C11 = {
        title: '十一、二次型',
        children: ['/11/']
    }; 
    */
    return [C1, C2, C3 /*, C4, C5, C6, C7, C8, C9, C10, C11*/ ];
}