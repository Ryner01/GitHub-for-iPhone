var api = {
  getCompleteProfile(token) {
    fetch('https://api.github.com/user')
    .then((res) => res.json())
    .then((json) => {
      let profileData = json;
      return profileData;
    });
  }
};

module.exports = api;
