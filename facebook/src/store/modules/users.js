import ServerProxy from '@/serverproxy/serverproxy'
import { resolve } from 'bluebird';
export const Users = {
  state: {
    users: [],
    activeUser: null,
    serverProxy: new ServerProxy(),
  },
  mutations: {
    setUsers(state, data) {
      state.users = data;
    },
    setActiveUser(state, user) {
      state.activeUser = state.users.find(u => u.userId === user);
    },
  },
  actions: {
    setUsers({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        let request = {
          url: "/data-proxy/user.json",
          method: "GET",
          headers: { 'Content-Type': `application/json` },
        }
        state.serverProxy.serverRequest(request)
          .then((response) => {
            console.log(response);
            resolve(response.data.users);
            commit("setUsers", response.data.users);

          })
          .catch(() => {
            reject();
          })
      })
    },
    setActiveUser({ commit }, user) {
      commit("setActiveUser", user);
    },
  },
  getters: {
    getUsers(state) {
      return state.users
    },
    getActiveUser(state) {
      return state.activeUser;
    },

  }
}