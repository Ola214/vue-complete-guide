
const app = Vue.createApp({
    data() {
        return {
            enteredValue: '',
            tasks: [],
            taskListIsVisible: true
        }
    },
    computed: {
        buttonCaption() {
            return taskListIsVisible ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredValue);
        },
        toggleTaskList() {
            this.taskListIsVisible = !this.taskListIsVisible;
        }
    }
});
app.mount('#assignment');