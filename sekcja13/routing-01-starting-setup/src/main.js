import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams'},
        //{ path: '/teams', component: TeamsList, alias: '/' },
        { 
        //   name: teams, 
          path: '/teams', 
          meta: { needsAuth: true},
          components: { default: TeamsList, footer: TeamsFooter }, 
          children: [
              { name: 'team-members', path: ':teamId', component: TeamMembers, props: true},
          ] 
        },
        { path: '/users', 
          components: {
            default: UsersList, footer: UsersFooter
          },
          beforeEach(to, from, next) {
            next();
          }  
        },
        {path: '/:notFound(.*)', component: NotFound}
    ],
    linkActiveClass: 'active',
    scrollBehaviour(_, _2, savedPosition) {
        if(savedPosition) {
            return savedPosition;
        }
        return {left: 0, top: 0}
    }
});

router.beforeEach(function(to, from, next) {
    console.log('Global beforeEach');
    console.log(to, from);
    // if(to.name === 'team-members') {
    //     next();
    // } else {
    //     next({name: 'teams-members', params: {teamId: 't2'}});
    // }
    if(to.meta.needsAuth) {
        console.log('Needs auth!');
        next();
    } else {
        next();
    }
    next();
});

router.afterEach(function(to, from) {
    //sending analytics data
    console.log(to, from);
});

const app = createApp(App);
app.use(router);

app.mount('#app');
