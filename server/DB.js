/**
 * Simulate DB. this file runs SYNC to avoid concurrency issues in this demo.
 * In production or in real project DO NOT USE SYNC
 * */

//Import modules
var fs = require('fs');

const FILE_PATH = './_db.json';

//List
exports.list = function () {
  return read();
};

//Save
exports.save = function (item) {
  var data = read();
  item.id = ~~((Math.random() + Math.random() + Math.random()) * 10000000000) + '';
  data.push(item);
  write(data);
  return item;
};

//Update
exports.update = function (id, item) {
  var data = read();
  data.forEach(function (i, idx) {
    if (i.id == id) {
      data[idx] = item;
      data[idx].id = id;
    }
  });
  write(data);
  return item;
};

//Delete
exports.remove = function (id) {
  var data = read();
  write(data.filter(function (i) {
    return !(i && i.id == id);
  }));
  return true;
};

function read() {
  var exist = fs.existsSync(FILE_PATH); //Sync used for light weight demo purposes only. Don't use sync fs operations in prod/real apps
  return exist ? JSON.parse(fs.readFileSync(FILE_PATH)) : [];
}

function write(data) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data));//Sync used for light weight demo purposes only. Don't use sync fs operations in prod/real apps
}
