class TodoController {
  constructor ($scope) {
    'ngInject';

    this.items = [];
    this.loading = true;
    var self = this;
    setTimeout(function(){
      self.loading = false;
      console.log(self);
      $scope.$apply();
    },2000);

  }

  getItems(){
    return this.items || [];
  }

  saveItem(){
    this.items.push({
      postedAt: new Date(),
      description: this.newItemDescription,
      state: 'pending'
    });
    this.newItemDescription = null;
  }
}

export default TodoController;
