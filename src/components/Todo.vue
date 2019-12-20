<template>
  <div class="todo" width=100%>
    <input type="checkbox" v-on:change="setIsDone"/>
    <input class="task" v-bind:class="{isDone:todo.isDone}" v-model="todo.task"/>
    <v-btn icon color="red" v-if="todo.isDone" @click="removeTodo()">
      x
    </v-btn>
  </div>
</template>

<script>

export default {
  name: "Todo",
  props: ["todo"],
  methods: {
    setIsDone() {
      this.todo.isDone = !this.todo.isDone
    },
    removeTodo() {
      this.$store.dispatch('removeTodo', this.todo)
    }
  }
}
</script>

<style scoped>
  .todo {
    padding: 5px 30px;
    width: 100%
  }

  .task {
    padding: 5px 10px;
    outline: none;
    width: 90%
  }

  .isDone {
    text-decoration: line-through;
  }

  .remove {
    color: red
  }
</style>