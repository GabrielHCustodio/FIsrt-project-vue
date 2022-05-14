const MyNameApp = {
    data() {
        return {
            nome: "",
            comentario: "",
            data: ""
        }
    },
    methods: {
        cadastrar() {
        let tempoDecorrido = Date.now()
        let dataAtual = new Date(tempoDecorrido)
        let dataPublicacao = dataAtual.toISOString()

        let comentarios = JSON.parse(localStorage.getItem('comentarios'))

        if(!comentarios) comentarios = []

        comentarios.push({
          nome: this.nome,
          comentario: this.comentario,
          data: dataPublicacao
        })

        localStorage.setItem('comentarios' , JSON.stringify(comentarios))

        console.log(comentarios)
        }

    
    }
}

Vue.createApp(MyNameApp).mount("#app")