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
    } else {
      followText = "Unfollow!";
    }
    
    this.$el.text(followText);
  }
  
  handleClick(e) {
    e.preventDefault();
    $.ajax({
      method: this.followState === "unfollowed" ? 'POST' : "DELETE",
      url: `/users/${this.followeeId}/follow`,
      dataType: "json"
    });
    if (this.followState === "unfollowed") {
      this.followState = "followed";
    } else { 
      this.followState = "unfollowed";
    }
    this.render();
  }
}


module.exports = FollowToggle;