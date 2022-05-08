const MyNameApp = {
    data() {
        return {
            Comentarios: ""
        }
    },
    methods: {
        cadastrar() {
            let name = this.$refs.inputNome.value
            let comentary = this.$refs.formulario[1].value

            this.Comentarios += `Sou: ${name} Comentário:  ${comentary}`
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")