var api = {

  getCompleteProfile(auth) {
    let url = `https://api.github.com/user?access_token=${auth.access_token}`;
    return fetch(url).then((res) => res.json());
  },

  getAuthUserRepos(auth) {
    let url = `https://api.github.com/user/repos?access_token=${auth.access_token}`;
    return fetch(url).then((res) => res.json());
  }

};

module.exports = api;
