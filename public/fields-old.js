export let dataFields = {

    model: {
        /*id: '',
        name: 'John Doe',
        password: 'J0hnD03!x4',
        email: 'john.doe@gmail.com',
        status: true,
        elementStatus: false,
        userName: '',
        userName2: '1234',
        number: '',
        age: '',
        select: '',
        idHide: '111',
        multiStlect: '',
        radio: 'radio3',
        date: '',
        time: '14:00',
        startTime: '13:30',
        endTime: '17:40',
        upload: [{
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
            name: 'food2.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]*/
    },

    schema: {
        fields: [
            {
                type: 'elementInput',
                inputType: 'text',
                labelElement: 'ID',
                model: 'id',
                clearable: true,
                max: 5,
                showWordLimit: true
            },
            {
                type: 'elementInput',
                inputType: 'text',
                labelElement: 'password',
                model: 'password',
                showPassword: true
            },
            {
                type: 'elementInput',
                inputType: 'email',
                labelElement: 'email',
                model: 'email',
            },
            {
                type: 'elementSelect',
                labelElement: 'Select',
                model: 'select',
                message: 'Please select',
                trigger: 'change',
                options: [{
                    value: 'Option1',
                    label: 'Option1'
                }, {
                    value: 'Option2',
                    label: 'Option2'
                }, {
                    value: 'Option3',
                    label: 'Option3'
                }, {
                    value: 'Option4',
                    label: 'Option4'
                }, {
                    value: 'Option5',
                    label: 'Option5'
                }]
            },
            {
                type: 'elementInput',
                inputType: 'text',
                labelElement: 'idHide',
                model: 'idHide',
                clearable: true,
                max: 5,
                showWordLimit: true,
                visible: function (model) {
                    return model && model.select == 'Option1'
                }
            },
            {
                type: 'elementSelect',
                labelElement: 'multiStlect',
                model: 'multiStlect',
                multiple: true,
                message: 'Please select',
                trigger: 'change',
                options: [{
                    value: 'Option1',
                    label: 'Option1'
                }, {
                    value: 'Option2',
                    label: 'Option2'
                }]
            },
            {
                type: 'elementInputNumber',
                labelElement: 'Number',
                model: 'number',
                max: 5,
                controlsPosition: 'right'
            },
            {
                type: "elementTextArea",
                labelElement: "textArea",
                model: "userName"
            },
            {
                type: "elementTextArea",
                labelElement: "textArea 2",
                model: "userName2",
                rows: 6
            },
            {
                type: 'elementCheckbox',
                labelElement: 'Status',
                labelText: 'elementstatus',
                model: 'elementStatus',
            },
            {
                type: 'elementInputAutocomplete',
                labelElement: 'Autocomplete'
            },
            {
                type: 'elementDatePicker',
                labelElement: 'date',
                model: 'date'
            },
            {
                type: 'elementTimePicker',
                labelElement: 'Time',
                model: 'time',
                start: '10:00',
                end: '20:00',
                step: '00:10',
                minTime: '13:10',
                maxTime: '14:30'
            },
            {
                type: 'elementRadio',
                labelElement: 'Radio',
                model: 'radio',
                options: [{
                    value: 'radio1',
                    label: 'radio1'
                }, {
                    value: 'radio2',
                    label: 'radio2',
                    disabled: true
                }, {
                    value: 'radio3',
                    label: 'radio3'
                }]
            },
            {
                type: 'elementUpload',
                labelElement: 'Upload',
                model: 'upload',
                action: '//jsonplaceholder.typicode.com/posts/',
                multiple: true,
                limit: 3,
                accept: '.png, .jpg, .jpeg, image/*,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                buttonSize: 'small',
                buttonType: 'primary',
                buttonText: 'Загрузить файл',
                tip: 'jpg/png файлы размером менее 500 КБ'
            }
        ]
    },

    formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true,
        model: 'testForm',
        action: '',
        //labelWidth: '120px',
        labelWidth: '200px',
        rules: {
            /*id: [{
                required: true,
                message: 'Пожалуйста введите свой ID',
                trigger: 'blur'
            }, {
                min: 3,
                max: 5,
                message: 'Пожалуйста введите от 3 до 5 символов',
                trigger: 'blur'
            }],*/
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
            }]
        }
    }
};