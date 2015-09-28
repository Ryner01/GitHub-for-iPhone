var api = {

  getFollowOrFollowers(switchFollow, name) {
  	let url = `https://api.github.com/users/${name}/${switchFollow}`;
  	return fetch(url).then((res) => res.json());
  },

  getCompleteProfile(auth) {
    let url = `https://api.github.com/user?access_token=${auth.access_token}`;
    return fetch(url).then((res) => res.json());
  },

  getAuthUserRepos(auth) {
    let url = `https://api.github.com/user/repos?access_token=${auth.access_token}`;
    return fetch(url).then((res) => res.json());
  },

  getContributedRepos(name) {
    let url = `https://api.github.com/users/${name}/repos?affiliation=collaborator`;
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;
