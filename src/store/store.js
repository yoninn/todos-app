import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todos: []
    },
    actions: {
        addTodo({ commit }, todo) {
            commit('addTodo',todo)
            
        },
        removeTodo({ commit }, todo) {
            commit('removeTodo', todo)
        }
    },
    mutations: {
        addTodo(state, todo) {
            state.todos.push(todo);
        },
        removeTodo(state, todoToRemove) {
            const index = this.state.todos.findIndex(todo => todo.id === todoToRemove.id)
            state.todos.splice(index, 1)
        }
    }
});