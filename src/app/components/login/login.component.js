class LoginController {

  /* @ngInject */
  constructor($log, AuthService) {
    this.$log = $log;
    this.authService = AuthService;
    this.username = '';
    this.password = '';
    this.isLogged = false;
  }

  login() {
    this.$log.log('username:', this.username);
    this.$log.log('password', this.password);
    this.authService.login(this.username, this.password);
  }

}

export const login = {
  template: require('./login.component.html'),
  controller: LoginController
};
