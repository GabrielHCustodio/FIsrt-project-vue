const MyNameApp = {
    data() {
        return {
            name: "",
            input_name: "",
            n1: 10,
            n2: 5,
            valor: "Enviar",
            placeholder: "Digite seu nome..."
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();

            console.log(this.input_name)

            this.name = this.input_name
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")