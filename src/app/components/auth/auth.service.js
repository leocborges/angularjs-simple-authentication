let isLoggedIn = false;
let userLogged = null;

export class AuthService {

  constructor($log, $state) {
    this.$log = $log;
    this.$state = $state;
  }

  login(username, password) {
    userLogged = {
      username,
      password
    };
    isLoggedIn = true;
    this.$log.log('logging user:', userLogged);
    this.$state.go('dashboard');
  }

  logout() {
    this.$log.warn('Loggout user:', userLogged);
    userLogged = null;
    isLoggedIn = false;
    this.$state.go('login');
  }

  isLoggedIn() {
    this.$log.log('isLoggedIn:', isLoggedIn);
    return isLoggedIn;
  }

  getLoggedUser() {
    return userLogged;
  }
}
