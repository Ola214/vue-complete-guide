const app = Vue.createApp({
    data() {
        return {
            name: 'Maxilian',
            age: 31,
            imageUrl: 'https://image.url.com'
        }
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        },
        calculateRandom() {
            return Math.random();
        }
    }
});

app.mount('#assignment');