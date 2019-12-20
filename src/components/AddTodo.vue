<template>
  <v-flex xs12>
    <v-text-field class="addTodo" id="addTodo" label="Add a new task" clearable v-model="newTodo" @keydown.enter="addTodo"/>
  </v-flex>
</template>

<script>
import uuidv4 from 'uuid/v4';

export default {
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {  
    addTodo() {  
      const todoToAdd = { id: uuidv4(), task: this.newTodo, isDone: false }
      this.$store.dispatch('addTodo', todoToAdd)
      this.newTodo = ''
    }  
  }
 }
</script>

<style lang="scss" scoped>
  .addTodo {
    padding: 0px 30px;
  }
</style>
