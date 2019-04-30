<template>
  <nav>    
     <v-list>
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="https://randomuser.me/api/portraits/men/85.jpg">
        </v-list-tile-avatar>
        Alvaro Zenon Quispe Segales
      </v-list-tile>
    </v-list>

    
    <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="$router.push('/AtencionCasos')"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
  </nav>
</template>
<script>

import { mapActions, mapGetters, mapMutations } from "vuex";


export default {
  data () {
      return {
        drawer: true,
        items: [
          { title: 'Atencion de Casos', icon: 'dashboard' },
          { title: 'Usuarios', icon: 'question_answer' }
        ],
        right: null
      }
    }
};
</script>

