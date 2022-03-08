const app = Vue.createApp({
    data() {
        return {
            number: 0
        }
    },
    computed: {
        result() {
            if (this.number < 37) {
                return 'Not there yet!';
            } else if (this.number === 37) {
                return this.number;
            } else {
                return 'Too much!';
            }
        }
    },
    watch: {
        result() {
            
        }
    },
    methods: {
        addNumber(num) {
            this.number = this.number + num;
        }
    }
});
app.mount('#assignment');