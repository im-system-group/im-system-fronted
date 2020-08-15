import { apiRequest } from "../../utils"

const state = () => ({
    item: null,
    comments: [],
    isItemLoaded: false,
    isItemLoading: true,
    isCommentsLoaded: false,
    isCommentsLoading: true,
})

const getters = {

}

const actions = {
    async loadItem({ commit }, { id }) {
        try {
            commit('set', { isItemLoading: true, isItemLoaded: false });
            const response = await apiRequest.get(`/access-article-api.php?id=${id}`)
            const item = response.data.result
            commit('set', { item, isItemLoading: false, isItemLoaded: true })
        }
        catch (err) {
            console.log(err)
        }
    },
    async loadComments({ commit }, { id }) {
        try {
            commit('set', { isCommentsLoading: true, isCommentsLoaded: false });
            const response = await apiRequest.get(`/access-comments-api.php?id=${id}`)
            const comments = response.data.results
            commit('set', { comments, isCommentsLoading: false, isCommentsLoaded: true })
        }
        catch (err) {
            console.log(err)
        }
    },
    dropItemAndComments({ commit }) {
        commit('set', {
            item: null,
            comments: [],
            isItemLoaded: false,
            isItemLoading: true,
            isCommentsLoaded: false,
            isCommentsLoading: true,
        })
    }
}

const mutations = {
    set(state, partialState) {
        Object.assign(state, partialState);
    },
}

const article = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

export default article
