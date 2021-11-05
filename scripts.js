const TodoList = {
  data() {
    return {
      todos: [],
      newTask: {
        done: false,
      },
    };
  },
  methods: {
    addTask() {
      if (this.newTask.name) {
        this.todos.push(this.newTask);
        this.newTask = {
          done: false,
        };
        localStorage.setItem('todos', JSON.stringify(this.todos));
      } else {
        alert('field must be filled !');
      }
    },
    storeTasks() {
      //  methode 2 pour mettre à jour le localStorage, évite les updates intempestives à chaque touches entrée de l'input
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
  },
  created() {
    this.todos = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : this.todos;
  },
  // updated() {
  //  methode 1 pour mettre à jour le localStorage, la plus simple
  //   localStorage.setItem('todos', JSON.stringify(this.todos));
  // },
};

Vue.createApp(TodoList).mount('#app');
