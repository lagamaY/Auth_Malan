import { createStore } from 'vuex'  // Remarque : c'est 'vuex', pas 'vux'

export default createStore({

    // Le "state" est l'objet qui contiendra toutes les variables d'état de l'application.
    state:{
        user : null
    },

    // Les "mutations" sont les fonctions qui modifient l'état.
    mutations:{
        SET_USER (state, user) {
            state.user = user
        },

        CLEAR_USER (state) {
            state.user = null
        }
    }, 

    // Les "actions" sont comme les mutations, mais elles peuvent être asynchrones.
    actions: {
        async login ({ commit }, details){

        },

        async register ({ commit }, details){

        },

        async logout ({ commit }){

        }
    },

    // Les "modules" permettent de diviser votre store en modules plus petits pour le rendre plus organisé.
    modules:{
    }
})
``
