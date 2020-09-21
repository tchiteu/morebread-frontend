<template>
  <v-row>
    <!-- TABELA -->
    <v-col cols="8">
      <v-data-table>

      </v-data-table>
    </v-col>
    
    <!-- CADASTRO -->
    <v-col v-if="true" cols="4">
    </v-col>

    <!-- EDIÇÃO -->
    <v-col v-else cols="4">
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: function() {
      
    },
    methods: {

    }
  }
</script>>