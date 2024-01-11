const userSessionId = new Map();

const setUserSessionId = (id, user) => {
  userSessionId.set(id, user);
};

const getUserSessionId = (id) => {
  const user = userSessionId.get(id);
  return user;
};

module.exports ={
    setUserSessionId,
    getUserSessionId
}