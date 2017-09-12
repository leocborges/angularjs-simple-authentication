import angular from 'angular';

import {hello} from './app/hello';
import {header} from './app/header.component';
import {main} from './app/main.component';
import {login} from './app/components/login/login.component';
import {dashboard} from './app/components/dashboard/dashboard';
import {AuthService} from './app/components/auth/auth.service';
import routesConfig from './routes';
import 'angular-ui-router';
import './index.css';

export const app = 'app';

angular
  .module(app, [
    'ui.router'
  ])
  .run(($state, $transitions, AuthService) => {
    $transitions.onSuccess({}, trans => {
      if (trans.router.stateService.current.authenticated && !AuthService.isLoggedIn()) {
        $state.transitionTo('login');
      }
    });
  })
  .config(routesConfig)
  .service('AuthService', AuthService)
  .component('app', hello)
  .component('loginComponent', login)
  .component('headerComponent', header)
  .component('mainComponent', main)
  .component('dashboard', dashboard);

