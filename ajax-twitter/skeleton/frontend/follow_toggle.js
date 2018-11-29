const APIUtil = require("./api_util");


class FollowToggle {
  constructor($el) {
    this.$el = $el;
    this.followeeId = $el.data('followeeId');
    this.followState = $el.data('initialFollowState');
    this.render();
    this.$el.on("click", this.handleClick.bind(this));
  }
  
  render() {
    let followText;
    if (this.followState === "unfollowed") {
      followText = "Follow!";
      this.$el.removeAttr('disabled');
    } else if (this.followState === "followed") {
      followText = "Unfollow!";
      this.$el.removeAttr('disabled');
    } else if (this.followState === "following") {
      followText = "Following...";
      this.$el.prop('disabled', 'true');
    } else {
      followText = "Unfollowing...";
      this.$el.prop('disabled', 'true');
    }
    
    this.$el.text(followText);
  }
  
  handleClick(e) {
    e.preventDefault();
    
    if (this.followState === "unfollowed") {
      APIUtil.followUser(this.followeeId).then( () => {
        this.followState = "followed";
        this.render();
      });
      this.followState = "following";
    } else {
      APIUtil.unfollowUser(this.followeeId).then( () => {
        this.followState = "unfollowed";
        this.render();
      });
      this.followState = "unfollowing";
    }
    
    this.render();
  }
}


module.exports = FollowToggle;