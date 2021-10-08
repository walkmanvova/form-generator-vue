<template>
    <el-form-item
            :label="schema.labelElement" :prop="schema.model">
        <el-date-picker
                type="date"
                v-model="value"
                :id="getFieldID(schema)"
                :class="schema.fieldClasses"
                :disabled="disabled"
                :placeholder="schema.placeholder"
                :readonly="schema.readonly"
                :name="schema.inputName"
                :default-value="schema.defaultValue"
                :format="schema.format"
                :value-format="schema.valueFormat"
                :picker-options="pickerOptions">
        </el-date-picker>
    </el-form-item>
</template>

<script>
    import { abstractField } from "vue-form-generator";

    export default {
        mixins: [ abstractField ],

        data () {
            return {
                pickerOptions: {
                    firstDayOfWeek: 1
                }
            }
        }
    };
</script>