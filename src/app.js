const MyNameApp = {
    data() {
        return {
            msg: '',
            cliques: '',
            formulario:'',
            teclas: ''
        }
    },
    methods: {
        prevenirComportamento() {
            this.msg = 'Comportamento padrão ativo'
        },
        executarUmaVez() {
            this.cliques ++
        },
        prevenirUmaVez() {
            this.formulario = 'Prevenindo comportamento padrão uma vez'
        },
        verificarTeclas(e) {
            this.teclas += e.key
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")