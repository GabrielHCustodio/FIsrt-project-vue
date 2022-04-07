const MyNameApp = {
    data() {
        return {
            paciente: '',
            pacientes: [
                {nome: 'Gabriel Henrique', idade: 21},
                {nome: 'Guilherme Siqueira', idade: 46},
                {nome: 'Gabriela Candido', idade: 27},
                {nome: 'Gabriel Marques', idade: 52},
                {nome: 'Guilherme Henrique', idade: 84}
            ],
            lista: []
        }
    },
    methods: {},
    computed: {},
    watch: {
        paciente(valorNovo) {
            this.lista = this.pacientes.filter( p => p.nome.match(valorNovo))
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")