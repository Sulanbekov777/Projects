Vue.component('todo-item', {
    template: `
        <li>
            {{ title }}\
            <button v-on:click="$emit('edit')">Edit</button>
            <button v-on:click="$emit('remove')">Del</button>
        </li>
        `,
    props: ['title']
})

new Vue({
    el: '#myApp',
    data: {
        myTitle: 'Dejavju',
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'shoes'
            },
            {
                id: 2,
                title: 'clothing'
            },
            {
                id: 3,
                title: 'accessory'
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
        this.newTodoText = ''
        },
        delTodo: function () {
            this.todos.push({
                id: this.nextTodoId--,
                title: this.delText
            })
        this.newTodoText = ''
        }
    }
})