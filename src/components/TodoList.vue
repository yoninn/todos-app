<template>
 <v-app>
    <v-app-bar app color="indigo" dark >
      <v-toolbar-title>TODO Manager</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid >
        <v-layout justify-center="true" row>
          <v-flex xs12 sm8>
            <v-row>
              <AddTodo/>
            </v-row>
            <v-row v-bind:key="todo.id" v-for="todo in todos">
              <Todo v-bind:todo="todo"/>
            </v-row>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019 Yoni</span>
    </v-footer>
  </v-app>
</template>

<script>
import Todo from './Todo';
import AddTodo from './AddTodo';

export default {
  components: {
    Todo,
    AddTodo
  },
  computed: {
    todos() {
      return this.$store.state.todos
    }
  }
}
</script>
