import router from '../router'
import Axios from 'axios'
//Allows axios to work locally or live
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
    baseURL: base + "api/boards",
    timeout: 3000,
    withCredentials: true
})

export default {
    state: {

    },
    mutations: {

    },
    actions: {
        getBoards({ commit, dispatch }) {
            api.get('')
                .then(res => {
                    commit('setResource', { resource: 'boards', data: res.data })
                })
        },
        addBoard({ commit, dispatch }, boardData) {
            api.post('', boardData)
                .then(serverBoard => {
                    dispatch('getBoards')
                })
        },
        async delortBoard({ dispatch }, boardId) {
            try {
                await api.delete(boardId)
                router.push('/')
            } catch (error) {

            }
        }
    }
}