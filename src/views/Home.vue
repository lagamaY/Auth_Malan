<!-- <template>

  <h1> Bienvenue sur la page d'acceuil !</h1>
  
  <div v-if = "$store.state.user">
      <button  @click="$store.dispatch('logout')">
        Déconnexion
      </button>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { onBeforeMount } from 'vue';
import {useStore} from 'vuex';


export default {
  setup(){
    const store = useStore()

    onBeforeMount(()=>{
      store.dispatch('fetchUser')
    })

    return{
      user: store.state.user
    }
  }
}
</script> 

<style>

</style> -->



<template>
    <h1>Bienvenue sur la page d'accueil !</h1>
  
    <div v-if="user">
      <button @click="logout">
        Déconnexion
      </button>
    </div>
  </template>
  
  <script setup>
  import { onBeforeMount, ref, defineExpose } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  onBeforeMount(() => {
    store.dispatch('fetchUser');
  });
  
  const user = ref(store.state.user);
  
  const logout = () => {
    store.dispatch('logout');
  };
  
  // Exposer les variables pour le template
  defineExpose({ user, logout });
  </script>
  
  <style>
    /* Vos styles ici */
  </style>
  