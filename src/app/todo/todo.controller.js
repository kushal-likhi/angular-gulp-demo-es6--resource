class TodoController {
  constructor($scope, TodoItem, toastr) {
    'ngInject';
    this.scope = $scope;
    this.items = [];
    this.loading = true;
    this.TodoItem = TodoItem;
    this.toastr = toastr;
    this.loadItems();
  }

  loadItems() {
    var self = this;
    this.TodoItem.query(function (items) {
      self.items = items;
      self.loading = false;
    });
  }

  getItems() {
    return this.items || [];
  }

  saveItem() {
    var self = this;
    var item = {
      postedAt: new Date(),
      description: this.newItemDescription,
      state: 'pending',
      order: this.items.length
    };
    this.items.push(item);
    this.newItemDescription = null;
    new this.TodoItem(item).$save(function (_item) {
      if (_item) {
        self.toastr.success('Saved Item in Database!');
        self.items[item.order].id = _item.id;
      }
    })
  }

  deleteItem(item) {
    var self = this;
    item.$remove(function (resp) {
      if (resp) {
        self.toastr.success('Removed From Database!');
      }
    });
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
