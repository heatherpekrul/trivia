import { mapActions, mapGetters } from "vuex";

export default {
    name: 'PresentationAnswer',
    props: {
        answer: {
            required: true,
            type: Object,
        },
        showCorrectAnswer: {
            required: true,
            type: Boolean,
            default: false,
        },
    },
    methods: {
        ...mapActions('GamesModule', [
            'submitAnswer'
        ]),
        async onClickAnswer(answerId) {
            await this.submitAnswer(answerId)
                .catch((e) => console.error(e));
        }
    }
};