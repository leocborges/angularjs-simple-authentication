import angular from 'angular';
import 'angular-mocks';
import {dashboard} from './dashboard';

describe('dashboard component', () => {
  beforeEach(() => {
    angular
      .module('dashboard', ['app/components/dashboard/dashboard.html'])
      .component('dashboard', dashboard);
    angular.mock.module('dashboard');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<dashboard></dashboard>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
