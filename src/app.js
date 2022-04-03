const MyNameApp = {
    data() {
        return {
            cursos: ['Vue', 'React', 'Angular', 'Java', 'Node', 'PHP'],
            cursos2: {
                1000: {
                    title: "Vue Js",
                    description: "Aprenda um dos frameworks mais utilizados do momento"
                },
                1001: {
                    title: "Node Js",
                    description: "Aprenda a ferramenta Back-end mais utilizado do momento"
                }
            },
            publicacoes: [
                { id: 1, publicacao: "Publicação 1"},
                { id: 2, publicacao: "Publicação 2"},
                { id: 3, publicacao: "Publicação 3"}
            ],
            comentarios: [
                { id: 1, comentario: "Comentário 1"},
                { id: 2, comentario: "Comentário 2"},
                { id: 3, comentario: "Comentário 3"}
            ]
        }
    },
    methods: {
        misturarPubli() {
            let misturado = []

            misturado[0] = this.publicacoes[2]
            misturado[1] = this.publicacoes[0] 
            misturado[2] = this.publicacoes[1]

            this.publicacoes = misturado
        },
        adicionarElemento() {
            this.comentarios.push({ id: 4, comentario: "Comentário adicionado"})
        },
        removerElemento() {
            this.comentarios.pop()
        },
        modificarElemento() {
            this.comentarios[1] = { id: 2, comentario: "Comentário 2 atualizado"}
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")