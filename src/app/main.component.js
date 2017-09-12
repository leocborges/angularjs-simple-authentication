class MainController {

  constructor($log, AuthService) {
    this.authService = AuthService;
    this.text = 'Main Component!';
    this.isLoggedin = false;
    $log.log('test');
  }

}

export const main = {
  template: require('./main.component.html'),
  controller: MainController
};

