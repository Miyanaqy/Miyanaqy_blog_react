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
];

const headerMenuConfig = asideMenuConfig;

export default headerMenuConfig;
