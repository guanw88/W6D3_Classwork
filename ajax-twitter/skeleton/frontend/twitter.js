const FollowToggle = require("./follow_toggle");
const APIUtil = require("./api_util");

$( () => {
  const $button = $(".follow-toggle");
  const followToggle = new FollowToggle($button);
});