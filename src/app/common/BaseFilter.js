class BaseFilter {

  factory() {
    return this.curry(this, function () {
      return this.curry(this, this.convert);
    });
  }

  curry(thisOpr, fn) {
    return function () {
      return fn.apply(thisOpr, [].slice.call(arguments));
    };
  }
}

export default BaseFilter;
