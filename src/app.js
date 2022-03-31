const MyNameApp = {
    data() {
        return {
            saldo: 4725.90,
            exibirSaldo: true,
            idade: 0,
            nota: 0
        }
    },
    methods: {
        setIdade() {
            this.idade = inputIdade.value
        },
        setNota() {
            this.nota = inputNota.value
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")