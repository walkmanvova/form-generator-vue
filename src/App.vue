<template>
    <div id="app">

        <!-- {{ info }} -->

        <el-form :id="formOptions.id" :method="formOptions.method" :action="formOptions.action" :model="model" :rules="formOptions.rules" :ref="formOptions.model" :label-width="formOptions.labelWidth">
            <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>

            <el-form-item>
                <el-button
                        type="success"
                        @click="submitForm('testForm')">
                    Отправить
                </el-button>
            </el-form-item>

        </el-form>

        <!-- for development -->
		<div class="panel panel-default">
            <div class="panel-heading">Model</div>
            <div class="panel-body">
                <pre v-if="model" v-html="prettyJSON(model)"></pre>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Schema</div>
            <div class="panel-body">
                <pre v-if="model" v-html="prettyJSON(schema)"></pre>
            </div>
        </div>
        <!-- end for development -->

    </div>
</template>

<script>
import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'

// Register custom fields
import fieldElementTextArea from "./custom-fields/fieldElementTextArea.vue";
import fieldElementCheckbox from "./custom-fields/fieldElementCheckbox.vue";
import fieldElementInputAutocomplete from "./custom-fields/fieldElementInputAutocomplete.vue";
import fieldElementInput from "./custom-fields/fieldElementInput.vue";
import fieldElementInputNumber from "./custom-fields/fieldElementInputNumber.vue";
import fieldElementSelect from "./custom-fields/fieldElementSelect.vue";
import fieldElementDatePicker from "./custom-fields/fieldElementDatePicker.vue";
import fieldElementTimePicker from "./custom-fields/fieldElementTimePicker.vue";
import fieldElementRadio from "./custom-fields/fieldElementRadio.vue";
import fieldElementUpload from "./custom-fields/fieldElementUpload.vue";
import fieldElementCascader from "./custom-fields/fieldElementCascader.vue";
Vue.component("fieldElementTextArea", fieldElementTextArea);
Vue.component("fieldElementCheckbox", fieldElementCheckbox);
Vue.component("fieldElementInputAutocomplete", fieldElementInputAutocomplete);
Vue.component("fieldElementInput", fieldElementInput);
Vue.component("fieldElementInputNumber", fieldElementInputNumber);
Vue.component("fieldElementSelect", fieldElementSelect);
Vue.component("fieldElementDatePicker", fieldElementDatePicker);
Vue.component("fieldElementTimePicker", fieldElementTimePicker);
Vue.component("fieldElementRadio", fieldElementRadio);
Vue.component("fieldElementUpload", fieldElementUpload);
Vue.component("fieldElementCascader", fieldElementCascader);

Vue.use(VueFormGenerator)

//import ElementUi from 'element-ui'
import {
    //Autocomplete,
    Input,
    InputNumber,
    Radio,
    //RadioGroup,
    //RadioButton,
    Checkbox,
    //CheckboxButton,
    //CheckboxGroup,
    Switch,
    Select,
    Option,
    //OptionGroup,
    Button,
    //ButtonGroup,
    DatePicker,
    TimeSelect,
    TimePicker,
    //Popover,
    //Tooltip,
    Form,
    FormItem,
    //Alert,
    //Icon,
    //Row,
    //Col,
    Upload,
    //Rate,
    Cascader,
    //ColorPicker,
    MessageBox,
    //Message,
} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

/* locale */
import lang from 'element-ui/lib/locale/lang/ru-RU'
import locale from 'element-ui/lib/locale'

locale.use(lang)
/* end locale */

//Vue.use(ElementUi, { locale })

Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Upload);
Vue.use(Cascader);
Vue.prototype.$msgbox = MessageBox;


// Импорт объекта с данными из файла
import {dataFields} from '../public/fields.js';

/*
var schema = {};
var formOptions = {};
var model = {};
*/

var schema = dataFields.schema;
var formOptions = dataFields.formOptions;
var model = dataFields.model;

import axios from 'axios';

export default {
    data () {
        return {
            formOptions: formOptions,
            schema: schema,
            model: model
        }
        //return dataFields
    },

    methods: {
        prettyJSON: function prettyJSON(json) {
            if (json) {
                json = JSON.stringify(json, undefined, 4);
                json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
                return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
                    var cls = 'number';
                    if (/^"/.test(match)) {
                        if (/:$/.test(match)) {
                            cls = 'key';
                        } else {
                            cls = 'string';
                        }
                    } else if (/true|false/.test(match)) {
                        cls = 'boolean';
                    } else if (/null/.test(match)) {
                        cls = 'null';
                    }
                    return '<span class="' + cls + '">' + match + '</span>';
                });
            }
        },

        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!  ' + formName);
                } else {
                    alert('error submit!!');
                    //console.log('error submit!!');
                    return false;
                }
            });
        }

    },
    /*mounted() {
        axios
            .get('https://dev-i.eksmo.ru/sk/form_json.php')
            .then(response => {
                this.schema = eval('(' + response.data + ')').schema;
                this.formOptions = eval('(' + response.data + ')').formOptions;
                this.model = eval('(' + response.data + ')').model;
            })
    }*/
}
</script>

<style>
#app pre {
    overflow: auto;
}
#app pre .string { color: #885800; }
#app pre .number { color: blue; }
#app pre .boolean { color: magenta; }
#app pre .null { color: red; }
#app pre .key { color: green; }

#app .panel {
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    border-color: #ddd;
}

#app .panel-heading {
    color: #333;
    background-color: #f5f5f5;
    border-color: #ddd;

    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

#app .panel-body {
    padding: 15px;
}

/*.field-checklist .wrapper {
    width: 100%;
}*/

#app .el-form-item,
#app .el-cascader {
    width: 100%;
}

.vue-form-generator > fieldset {
    border: 0;
    padding: 0;
}
</style>
