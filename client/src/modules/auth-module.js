
import AuthService from '../AuthService'
import router from '../router'



export default {
    state: {
        user: {}
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
    },
    actions: {
        async register({ commit, dispatch }, creds) {
            try {
                let user = await AuthService.Register(creds)
                commit('setUser', user)
                router.push({ name: "boards" })
            } catch (e) {
                console.warn(e.message)
            }
        },
        async login({ commit, dispatch }, creds) {
            try {
                let user = await AuthService.Login(creds)
                commit('setUser', user)
                router.push({ name: "boards" })
            } catch (e) {
                console.warn(e.message)
            }
        },
        async logout({ commit, dispatch }) {
            try {
                let success = await AuthService.Logout()
                if (!success) { }
                commit('resetState')
                router.push({ name: "login" })
            } catch (e) {
                console.warn(e.message)
            }
        }
    }
}