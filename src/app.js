const MyNameApp = {
    data() {
        return {
            pacientes: []
        }
    },
    methods: {
        adicionarPacientes() {
            this.pacientes.push({
                nome: inputNome.value,
                idade: inputIdade.value,
                plano: inputPlano.value
            })
        }
    },
    computed: {
        ultimoPacienteAdicionado() {
            let key = this.pacientes.length - 1
            let txt = ''

            txt += 'Paciente ' + this.pacientes[key].nome
            txt += ', idade ' + this.pacientes[key].idade
            txt += ', plano ' + this.pacientes[key].plano

            return txt
        },
        pacientePlanoOuro() {
            return this.pacientes.filter( items => items.plano == 'Ouro')
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")