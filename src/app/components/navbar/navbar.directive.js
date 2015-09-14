class NavbarDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
}

class NavbarController {
  constructor (moment) {
    'ngInject';

    // "this.creation" is avaible by directive option "bindToController: true"
    this.date = moment();
  }
}

export default NavbarDirective;
