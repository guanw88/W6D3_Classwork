const APIUtil = require("./api_util");


class UsersSearch {
  constructor($el){
    this.$el = $el;
    this.$input = $el.children().first();
    this.$ul = $el.children().last();
    this.$el.on('keypress', this.handleInput.bind(this));
  }
  
  handleInput() {
    let inputString = this.$input.val();
    console.log(inputString);
    APIUtil.searchUsers(inputString, this.render);
  }
  
  render() {
    console.log("rendered");
  }
}

module.exports = UsersSearch;