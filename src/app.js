const MyNameApp = {
    data() {
        return {
            paciente: 'Gabriel Henrique',
            sexo: '',
            plano: '',
            doencas: [],
            maisInformacoes: ''
        }
    },
    methods: {},
    computed: {}
}

Vue.createApp(MyNameApp).mount("#app")