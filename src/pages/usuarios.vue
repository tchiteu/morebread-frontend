<template>
  <v-app>
    <v-row class="mt-6 pa-4">
      <!-- TABELA -->
      <v-col cols="8">
        <v-card class="pa-8 text-left custom-border" tile>
          <h3 class="mb-8">Lista de usuários</h3>

          <v-data-table 
            class="elevation-2"
            disable-sort
            :headers="headers"
            :items="usuarios"
          />
        </v-card>
      </v-col>
      
      <!-- CADASTRO -->
      <v-col v-if="true" cols="4">
      </v-col>

      <!-- EDIÇÃO -->
      <v-col v-else cols="4">
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
  export default {
    mounted() {
      this.buscaUsuarios();  
    },
    data: () => ({
      usuarios: [],

      headers: [
        { text: "ID", value: "id" },
        { text: "Nome", value: "nome" },
        { text: "E-mail", value: "email" },
        { text: "Cargo", value: "cargo" },
        { text: "Ações", value: "acoes", width: "7%" }
      ]
    }),
    methods: {
      async buscaUsuarios() {
        await this.$axios.get('/usuarios')
          .then(retorno => {
            this.usuarios = retorno.data;
          })
          .catch(err => {
            if(err) this.usuarios = [];
          })
      }
    }
  }
</script>

<style scoped>
  .custom-border {
    border-top: solid 4px #674B4B;
  }
</style>