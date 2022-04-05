export default {
    increment(context) {
        setTimeout(function () {
            context.commit('icrement');
        }, 2000);
    },
    increase(context, payload) {
        console.log(context);
        context.commit('increase', payload);
    },
    login() {}
}