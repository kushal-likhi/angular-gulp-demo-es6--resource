class MainController {
  constructor (toastr) {
    'ngInject';

    this.toastr = toastr;
  }

  showToastr() {
    this.toastr.info('Hello!');
  }
}

export default MainController;
