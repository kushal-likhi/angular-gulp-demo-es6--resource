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

  closeEditMode(index) {
    this.items[index].editMode = false;
    this.items[index].newDescription = null;
  }

  openEditMode(index) {
    this.items[index].editMode = true;
    this.items[index].newDescription = this.items[index].description;
  }

  editModeSave(index) {
    this.items[index].description = this.items[index].newDescription;
    this.closeEditMode(index);
  }

}

export default TodoController;
