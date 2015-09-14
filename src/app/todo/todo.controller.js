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
      state: 'pending',
      order: this.items.length
    });
    this.newItemDescription = null;
  }

  deleteItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  closeEditMode(item) {
    var index = this.items.indexOf(item);
    this.items[index].editMode = false;
    this.items[index].newDescription = null;
  }

  openEditMode(item) {
    var index = this.items.indexOf(item);
    this.items[index].editMode = true;
    this.items[index].newDescription = this.items[index].description;
  }

  editModeSave(item) {
    var index = this.items.indexOf(item);
    this.items[index].description = this.items[index].newDescription;
    this.closeEditMode(index);
  }

}

export default TodoController;
