import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../views/SignUp/sign-up.vue';
import SignIn from '../views/SignIn/sign-in.vue';
import Recovery from '../views/SignIn/recoveryPassword.vue';
import Reset from '../views/SignIn/resetPassword.vue'; 
import SuccessReset from '../views/Success/successReset.vue';
import SuccessSignUp from '../views/Success/successSignUp.vue';
import CompleteAccount from '../views/SignUp/createPassword.vue'; 
import Profile from '../views/Profile/profile.vue'; 
import Search from '../views/Search/search.vue';

import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sign-up',
    name: 'Sign-Up',
    component: SignUp
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/recovery',
    name: 'Recovery',
    component: Recovery
  },
  {
    path: '/reset',
    name: 'Reset',
    component: Reset
  },
  {
    path: '/success',
    name: 'Success',
    component: SuccessReset
  },
  {
    path: '/activate',
    name: 'Activate account',
    component: SuccessSignUp
  },
  {
    path: '/complete',
    name: 'Complete account',
    component: CompleteAccount
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
