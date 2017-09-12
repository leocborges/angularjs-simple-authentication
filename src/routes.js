export default routesConfig;

/* @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login', {
      url: '/login',
      component: 'loginComponent',
      authenticated: false
    })
    .state('main', {
      url: '/main',
      component: 'mainComponent'
    })
    // .state('app', {
    //   url: '/',
    //   component: 'app'
    // })
    .state('dashboard', {
      url: '/',
      component: 'dashboard',
      authenticated: true
    });
}
