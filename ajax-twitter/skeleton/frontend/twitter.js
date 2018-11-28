const FollowToggle = require("./follow_toggle");

$( () => {
  const $button = $(".follow-toggle");
  const followToggle = new FollowToggle($button);
});