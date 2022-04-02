const MyNameApp = {
    data() {
        return {
            // elementosHTML: `<p>Este é o <br>título </br> do meu teste</p> <a href="https://www.google.com">Google</a>`
            saldo: 1100
        }
    },
    methods: {
        debitar() {
            this.saldo -= parseFloat(valor.value)
        },
        creditar() {
            this.saldo += parseFloat(valor.value)
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")