export default {
    namespaced: true,
    state: {
        shootCategories: [
            {
                name: 'Финграмотность',
                shoots: [
                    {
                        title: 'Как сэкономить на подарках',
                        subTitle: 'И не купить при этом ненужное и банальное',
                        image: '/assets/img/img_9.png',
                    },
                    {
                        title: 'Как получить кредит с плохой кредитной историей?',
                        subTitle: 'Рассказываем подробно',
                        image: '/assets/img/img_2.png',
                    },
                    {
                        title: '',
                        subTitle: 'Оформите еОСАГО онлайн прямо сейчас!',
                        image: '/assets/img/img_3.png',
                    },
                    {
                        title: '',
                        subTitle: 'Оформите еОСАГО онлайн прямо сейчас!',
                        image: '/assets/img/img_3.png',
                    },
                ],
            },
            {
                name: 'Лайфхаки',
                shoots: [
                    {
                        title: 'Обещания на 2020',
                        subTitle: 'О финансах, покупках и благополучии',
                        image: '/assets/img/img_4.png',
                    },
                    {
                        title: 'Возвращаемся в строй',
                        subTitle: 'Дарим пять советов по настройке на рабочий режим после праздников',
                        image: '/assets/img/img_5.png',
                    },
                    {
                        title: 'Куда поехать весной 2020',
                        subTitle: 'Если хочется сохранить бюджет и остаться в России',
                        image: '/assets/img/img_6.png',
                    },
                ],
            },
            {
                name: 'Советы',
                shoots: [
                    {
                        title: 'Как повысить уровень жизни',
                        subTitle: 'Перестать мечтать и начать действовать',
                        image: '/assets/img/img_7.png',
                    },
                    {
                        title: 'Признаки работодателей-мошенников',
                        subTitle: 'Учимся отличать хорошую работу от воров',
                        image: '/assets/img/img_8.png',
                    },
                    {
                        title: 'Мифы о МФО, которые давно пора развеять',
                        subTitle: 'Мы выбрали три из них и разрушили до основания',
                        image: '/assets/img/img_1.png',
                    },
                ],
            },
        ],
        form: {
            categories: {
                list: [],
                selected: '',
            },
            title: '',
            subtitle: '',
            image: '',
            backgroundColor: '#E4E4E4',
        }
    },

    mutations: {},

    actions: {},

    getters: {
        getShootCategories(state) {
            return state.shootCategories
        },
        getFormFields(state) {
            const res = Object.assign({}, state.form);
            res.categories.list = state.shootCategories.map(el => ({ value: el.name, label: el.name}));
            res.categories.selected = res.categories.list[0].value;

            return res
        }
    },

}
