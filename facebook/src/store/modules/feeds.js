import ServerProxy from '@/serverproxy/serverproxy'
export const Feeds = {
    state: {
        text: 'test',
        feeds: [],
        allFeeds: [],
        serverProxy: new ServerProxy(),
    },
    mutations: {
        setFeeds(state, data) {
            state.feeds = data;
            state.allFeeds = data;
        }
    },
    actions: {
        setFeeds({ commit, state }, data) {
            return new Promise(() => {
                let request = {
                    url: "/data-proxy/feeds.json",
                    method: "GET",
                    headers: { 'Content-Type': `application/json` },
                }
                state.serverProxy.serverRequest(request)
                    .then((response) => {
                        console.log(response);
                        commit("setFeeds", response.data.feeds);
                    })
                    .catch(() => {

                    })
            })
        }
    },
    getters: {
        getFeeds(state) {
            return state.feeds;
        }
    }
}