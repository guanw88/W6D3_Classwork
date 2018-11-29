const FollowToggle = require("./follow_toggle");
const APIUtil = require("./api_util");
const UsersSearch = require("./users_search");

$( () => {
  const $button = $(".follow-toggle");
  const followToggle = new FollowToggle($button);
  const $search = $(".users-search");
  const usersSearch = new UsersSearch($search);
});