export let dataFields = {

    model: {},

    schema: {
        fields: [
            {
                "type": "elementCascader",
                "id": "GANRE",
                "model": "GANRE",
                "labelElement": "Жанр рукописи",
                "values": [{
                    "id": "GANRE_1",
                    "name": "Российская остросюжетная женская литература (ЖОЛ)",
                    "children": [
                        {"id":"0", "name":"1"},
                        {"id":"1", "name":"Мелодраматический, сентиментальный, любовный детектив (Устинова)"},
                        {"id":"2", "name":"Сальса (смесь жанров) детектив (Полякова)"},
                        {"id":"3", "name":"Классический детектив загадка, Интеллектуальный детектив (Михалкова)"},
                        {"id":"4", "name":"Жизненный, психологический детектив/ триллер (Степанова)"},
                        {"id":"5", "name":"Милицейский, полицейский детектив (Маринина)"},
                        {"id":"6", "name":"Легкий авантюрный, приключенческий детектив"},
                        {"id":"7", "name":"Ретро детектив (события происходят в Советском Союзе)"},
                        {"id":"8", "name":"АРТ детектив( истории связанные с предметами искусства и древностями) (Дезомбре)"},
                        {"id":"9", "name":"Жесткая криминальная сага, мелодрама (Шилова)"},
                        {"id":"10", "name":"Фоновый детектив (расследование не главное) (Яковлева)"},
                        {"id":"11", "name":"Исторический детектив (Акунин, Свечин)"},
                        {"id":"12", "name":"Мистический, Готический детектив/триллер"},
                        {"id":"13", "name":"Юмористический, иронический детектив (Донцова)"},
                        {"id":"14", "name":"Молодежный (young adult) детектив/триллер"},
                        {"id":"other", "name":"Иное"}
                    ]
                },
                {
                    "id": "GANRE_2",
                    "name": "Российская мужская остросюжетная литература (МОЛ)",
                    "children": [
                        {"id":"0", "name":"2"},
                        {"id":"1", "name":"Классический детектив"},
                        {"id":"2", "name":"Современный криминальный Боевик"},
                        {"id":"3", "name":"Психологический/мистический триллер"},
                        {"id":"4", "name":"Приключенческий/ авантюрный роман"},
                        {"id":"5", "name":"Криминальная драма"},
                        {"id":"6", "name":"Исторический детектив"},
                        {"id":"7", "name":"Политический триллер"},
                        {"id":"8", "name":"Военный/армейский роман/боевик"},
                        {"id":"9", "name":"Шпионский триллер/детектив"},
                        {"id":"10", "name":"Поличейский роман/детектив"},
                        {"id":"11", "name":"Роман-катастрофа"},
                        {"id":"12", "name":"Бандитский роман"},
                        {"id":"other", "name":"Иное"}
                    ]
                },
                {
                    "id": "GANRE_3",
                    "name": "Фантастика, фентези (РФ)",
                    "children": [
                        {"id":"0", "name":"3"},
                        {"id":"1", "name":"Любовный роман (история о Золушке)"},
                        {"id":"2", "name":"Любовно-психологический роман"},
                        {"id":"3", "name":"Жизненные истории, \"Соседка на кухне\" (Веденская, Метлицкая)"},
                        {"id":"4", "name":"Любовно-мистический роман"},
                        {"id":"5", "name":"Любовно-исторический роман (ОН НЕ НУЖЕН)"},
                        {"id":"6", "name":"Любовно-приключенческий (не очень нужен)"},
                        {"id":"7", "name":"Иронический роман (нужен)"},
                        {"id":"8", "name":"Молодежный (young adult) роман/драма"},
                    ]
                },
                {
                    "id": "GANRE_4",
                    "name": "Современная российская проза (СРП)",
                    "children": [
                        {"id":"0", "name":"4"},
                        {"id":"1", "name":"Фантастический боевик (Каменистый)"},
                        {"id":"2", "name":"Фэнтези-боевик (Пехов)"},
                        {"id":"3", "name":"Эпическое фэнтези (Перумов)"},
                        {"id":"4", "name":"Космоопера"},
                        {"id":"5", "name":"Научная Фантастика(Громов)"},
                        {"id":"6", "name":"Историческая фантастика/ Альтернативная история"},
                        {"id":"7", "name":"Попаданцы в прошлое"},
                        {"id":"8", "name":"Попаданцы в иные миры (исключая Романтическое фэнтези)"},
                        {"id":"9", "name":"Романтическое фэнтези"},
                        {"id":"10", "name":"Юмористическая фантастика и фэнтези (Белянин)"},
                        {"id":"11", "name":"Городское фэнтези (Панов, Дяченко)"},
                        {"id":"12", "name":"ЛитРПГ"},
                        {"id":"13", "name":"Постапокалипсис (Сталкер, Круз)"},
                        {"id":"14", "name":"Мистика/Хоррор/Ужасы"},
                        {"id":"14", "name":"Стимпанк"},
                        {"id":"other", "name":"Иное"}
                    ]
                },
                {
                    "id": "GANRE_5",
                    "name": "Современный женский роман (СЖР)",
                    "children": [
                        {"id":"0", "name":"5"},
                    ]
                }]
            },
            {
                "type": "elementInput",
                "id": "SUBGANRE_OTHER",
                "model": "SUBGANRE_OTHER",
                "labelElement": "Поджанр рукописи (иное)",
                visible: function(model) {
                    if(model.GANRE !== undefined) {
                        return model && (model.GANRE[0] == "other" || model.GANRE[1] == "other" || model.GANRE[2] == "other");
                    }
                }
            },
            {
                "type": "elementInput",
                "id": "LAST_NAME",
                "model": "LAST_NAME",
                "labelElement": "Фамилия"
            },
            {
                "type": "elementInput",
                "id": "NAME",
                "model": "NAME",
                "labelElement": "Имя"
            },
            {
                "type": "elementInput",
                "id": "SECOND_NAME",
                "model": "SECOND_NAME",
                "labelElement": "Отчество"
            },
            {
                "type": "elementInput",
                "id": "ALIAS",
                "model": "ALIAS",
                "labelElement": "Псевдоним (если есть)"
            },
            {
                "type": "elementTextArea",
                "id": "EDUCATION",
                "model": "EDUCATION",
                "labelElement": "Образование",
                "autosize": {"minRows":"2", "maxRows":"10"}
            },
            {
                "type": "elementDatePicker",
                "id": "BIRTHDATE",
                "model": "BIRTHDATE",
                "labelElement": "Дата рождения"
            },
            {
                "type": "elementTextArea",
                "id": "SOCIALMEDIA_LINKS",
                "model": "SOCIALMEDIA_LINKS",
                "labelElement": "Ссылки в соцсетях",
                "autosize": {"minRows":"2", "maxRows":"10"}
            },
            {
                "type": "elementTextArea",
                "id": "PREVIOUSLY_PUBLISHED_BOOKS",
                "model": "PREVIOUSLY_PUBLISHED_BOOKS",
                "labelElement": "Ссылки на ранее изданные книги",
                "placeholder": "Ссылки на ранее изданные книги в бумажном или электронном виде на web-сайтах",
                "autosize": {"minRows":"2", "maxRows":"10"}
            },
            {
                "type": "elementTextArea",
                "id": "LITERARY_CONTESTS",
                "model": "LITERARY_CONTESTS",
                "labelElement": "Литературные конкурсы",
                "autosize": {"minRows":"2", "maxRows":"10"}
            },
            {
                "type": "elementInput",
                "id": "EMAIL",
                "model": "EMAIL",
                "labelElement": "E-mail"
            },
            {
                "type": "elementInput",
                "id": "PHONE",
                "model": "PHONE",
                "labelElement": "Телефон"
            },
            {
                "type": "elementInputNumber",
                "id": "SHEETS",
                "model": "SHEETS",
                "labelElement": "Объем (в авторских листах)",
                "min": "0",
                "max": "1000000000"
            },
            {
                "type": "elementUpload",
                "id": "SYNOPSIS_FILE",
                "model": "SYNOPSIS_FILE",
                "labelElement": "Файл синопсиса",
                "action": "//jsonplaceholder.typicode.com/posts/",
                "accept": ".png, .jpg, .jpeg, image/*,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "buttonSize": "small",
                "buttonType": "primary",
                "buttonText": "Загрузить файл",
                "tip": ""
            },
            {
                "type": "elementUpload",
                "id": "MANUSCRIPT_FILE",
                "model": "MANUSCRIPT_FILE",
                "labelElement": "Файл рукописи",
                "placeholder": "Подробное описание сюжета и героев на 1-2 страницы текста",
                "action": "//jsonplaceholder.typicode.com/posts/",
                "accept": ".png, .jpg, .jpeg, image/*,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "buttonSize": "small",
                "buttonType": "primary",
                "buttonText": "Загрузить файл",
                "tip": "Подробное описание сюжета и героев на 1-2 страницы текста"
            }
        ]
    },

    formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true,
        model: 'testForm',
        action: '',
        labelWidth: '200px',
        rules: {
            GANRE: [{
                required: true,
                message: 'Пожалуйста заполните поле',
            }],
            LAST_NAME: [{
                required: true,
                message: 'Пожалуйста заполните поле',
            }],
            NAME: [{
                required: true,
                message: 'Пожалуйста заполните поле',
            }],
            SECOND_NAME: [{
                required: true,
                message: 'Пожалуйста заполните поле',
            }],
            MANUSCRIPT_FILE: [{
                required: true,
                message: 'Пожалуйста заполните поле',
            }],
            EMAIL: [{
                type: 'email', message: 'Пожалуйста введите корректный E-mail адрес', trigger: ['blur']
            }]
        }
    }
};