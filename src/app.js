const MyNameApp = {
    data() {
        return {
            nome: "Ainda não sei"
        }
    },
    created() {
        setTimeout(() => {
            this.nome = "Gabriel"
        }, 1000);
    },
    mounted() {
        setTimeout(() => {
            this.nome = "Pedro"
        }, 2000);
    }
}

Vue.createApp(MyNameApp).mount("#app")