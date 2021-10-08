<template>
    <el-form-item
            :label="schema.labelElement" :prop="schema.model">
        <el-time-select
                v-model="value"
                :id="getFieldID(schema)"
                :class="schema.fieldClasses"
                :disabled="disabled"
                :placeholder="schema.placeholder"
                :readonly="schema.readonly"
                :name="schema.inputName"
                :picker-options="{
                    start: schema.start,
                    end: schema.end,
                    step: schema.step,
                    minTime: schema.minTime,
                    maxTime: schema.maxTime
                }">
        </el-time-select>
    </el-form-item>
</template>

<script>
    import { abstractField } from "vue-form-generator";

    export default {
        mixins: [ abstractField ]
    };
</script>