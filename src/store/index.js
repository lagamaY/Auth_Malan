import { createStore } from 'vuex'
import router from '../router'
import { auth } from '../firebase' 
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut 
} from 'firebase/auth' 

export default createStore({
    state: {
        user: null
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
        },
        CLEAR_USER(state) {
            state.user = null
        }
    },
    actions: {
        async login({ commit }, details) {
            const { email, password } = details;
            try {
                await signInWithEmailAndPassword(auth, email, password);
            } catch (error) {
                switch (error.code) {
                    case 'auth/user-not-found':
                        alert("Utilisateur non trouvé !");
                        break;
                    case 'auth/wrong-password':
                        alert("Mot de passe erroné");
                        break;
                    default:
                        alert("Une erreur s'est produite. Veuillez réessayer plus tard svp !");
                }
                return;
            }
            commit('SET_USER', auth.currentUser);
            router.push('/');
        },
        async register({ commit }, details) {
            const { email, password } = details;
            try {
                await createUserWithEmailAndPassword(auth, email, password);
            } catch (error) {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        alert("Email existant !");
                        break;
                    case 'auth/invalid-email':
                        alert("Email invalide");
                        break;
                    case 'auth/operation-not-allowed':
                        alert("Opération non autorisée");
                        break;
                    case 'auth/weak-password':
                        alert("Votre mot de passe doit contenir des lettres, chiffres et caractères spéciaux");
                        break;
                    default:
                        alert("Une erreur s'est produite. Veuillez réessayer plus tard svp !");
                }
                return;
            }
            commit('SET_USER', auth.currentUser);
            router.push('/');
        },
        async logout({ commit }) {
            await signOut(auth);
            commit('CLEAR_USER');
            router.push('/login');
        }
    },

    // fetchUser ({commit}){
    //     auth.onAuthStateChanged(async user => {
    //         if (user === null) {
    //             commit('CLEAR_USER')
    //         }else{

    //             commit('SET_USER', user)

    //             if(router.isReady() && router.currentRoute.value.path === '/login'){
    //                 router.push('/')
    //             }
    //         }
    //     })
    // }
  
    fetchUser ({ commit }) {
        auth.onAuthStateChanged(user => {
          if (user === null) {
            commit('CLEAR_USER');
          } else {
            commit('SET_USER', user);
      
            if (router.isReady() && router.currentRoute.value.path === '/login') {
              router.push('/');
            }
          }
        });
      }
      
}); 
