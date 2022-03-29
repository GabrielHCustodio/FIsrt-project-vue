const MyNameApp = {
    data() {
        return {
            cor: "branco",
            posicaoX: 0,
            posicaoY: 0
        }
    },
    methods: {
        mudarCor(c) {
            this.cor = c
        },
        coordenadas(e) {
            this.posicaoX = e.clientX
            this.posicaoY = e.clientY
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")