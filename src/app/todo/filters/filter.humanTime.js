import BaseFilter from '../../common/BaseFilter.js';

class HumanTimeFilter extends BaseFilter {
  constructor() {
    super();
    this.moment = moment;
  }

  convert(date) {
    return this.moment(date).format('ddd, DD MMM YYYY');
  }
}

export default new HumanTimeFilter().factory();
