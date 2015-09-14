class TodoController {
  constructor($scope) {
    'ngInject';
    this.scope = $scope;
    this.items = [];
    this.loading = true;
    var self = this;
    setTimeout(function () {
      self.loading = false;
      console.log(self);
      self.scope.$apply();
    }, 2000);

  }

  getItems() {
    return this.items || [];
  }

  saveItem() {
    this.items.push({
      postedAt: new Date(),
      description: this.newItemDescription,
      state: 'pending'
    });
    this.newItemDescription = null;
  }

  deleteItem(index) {
    this.items.splice(index, 1);
  }

}

export default TodoController;
