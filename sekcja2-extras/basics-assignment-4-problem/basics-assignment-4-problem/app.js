
const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            paragraphIsVisible: true
        }
    },
    computed: {
        paraClasses() {
            return { 
                user1: this.inputClass === 'user1', 
                user2: inputClass === 'user2',
                visible: this.paragraphIsVisible,
                hidden: !this.paragraphIsVisible
            };
        }
    },
    methods: {
        toggleParagraphVisibility() {
            this.paragraphIsVisible = !this.paragraphIsVisible;
        }
    }
});
app.mount("#assignment")