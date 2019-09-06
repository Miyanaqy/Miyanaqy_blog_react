// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const asideMenuConfig = [
  {
    name: '大厅',
    path: '/dashboard',
    icon: 'home2',
  },
  {
    name: '回廊',
    path: '/builder',
    icon: 'cascades',
  },
  {
    name: '时之间',
    path: '/task',
    icon: 'repair',
  },
  {
    name: '休息间',
    path: '/tasks',
    icon: 'repair',
  },
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice/issues/new',
    icon: 'question2',
    external: true,
    newWindow: true,
  },
  {
    name: '\u6587\u7AE0\u5217\u8868',
    path: '/articleList',
    icon: 'home',
  },
  {
    name: '\u7528\u6237\u9875\u9762',
    path: '/userPage',
    icon: 'home',
  },
];

const headerMenuConfig = asideMenuConfig;

export default headerMenuConfig;
