// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import Setting from './pages/Setting';
import Dashboard from './pages/Dashboard';
import Builder from './pages/Builder';
import Task from './pages/Task';
import ArticleList from './pages/ArticleList';
import BasicLayout from './layouts/BasicLayout';
import UserPage from './pages/UserPage';
import AddArticle from './pages/AddArticle';
import AddAlnum from './pages/AddAlnum';
import AddPhoto from './pages/AddPhoto';
import AddUser from './pages/AddUser';
import UserList from './pages/UserList';
import PhotoManageList from './pages/PhotoManageList';
import ArticleManageList from './pages/ArticleManageList';
import MessagBoard from './pages/MessagBoard';
import AddSystemMessage from './pages/AddSystemMessage';
import SystemMessage from './pages/SystemMessage';
import IndexPage from './pages/IndexPage';
import New from './pages/New';

const routerConfig = [
  {
    path: '/addAlnum',
    layout: BasicLayout,
    component: AddAlnum,
  },
  {
    path: '/userPage',
    layout: BasicLayout,
    component: UserPage,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/builder',
    component: Builder,
  },
  {
    path: '/task',
    component: Task,
  },
  {
    path: '/user/register',
    component: UserRegister,
  },
  {
    path: '/new',
    component: New,
  },
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/setting',
    component: Setting,
  },
  {
    path: '/articleList',
    layout: BasicLayout,
    component: ArticleList,
  },
  {
    path: '/addArticle',
    layout: BasicLayout,
    component: AddArticle,
  },
  {
    path: '/addPhoto',
    layout: BasicLayout,
    component: AddPhoto,
  },
  {
    path: '/addUser',
    layout: BasicLayout,
    component: AddUser,
  },
  {
    path: '/userList',
    layout: BasicLayout,
    component: UserList,
  },
  {
    path: '/photoManageList',
    layout: BasicLayout,
    component: PhotoManageList,
  },
  {
    path: '/articleManageList',
    layout: BasicLayout,
    component: ArticleManageList,
  },
  {
    path: '/messagBoard',
    layout: BasicLayout,
    component: MessagBoard,
  },
  {
    path: '/addSystemMessage',
    layout: BasicLayout,
    component: AddSystemMessage,
  },
  {
    path: '/systemMessage',
    layout: BasicLayout,
    component: SystemMessage,
  },
  {
    path: '/indexPage',
    layout: BasicLayout,
    component: IndexPage,
  },
];

export default routerConfig;
