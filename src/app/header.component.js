
class Header {

  constructor($log, AuthService) {
    this.$log = $log;
    this.authService = AuthService;
  }

  logout() {
    this.$log.log('Logging user out');
    this.authService.logout();
  }

}

export const header = {
  template: require('./header.component.html'),
  controller: Header
};
