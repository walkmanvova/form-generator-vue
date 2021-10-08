<template>
    <el-form-item
            :label="schema.labelElement" :prop="schema.model">
        <el-input-number
                v-model="value"
                :id="getFieldID(schema)"
                :class="schema.fieldClasses"
                :disabled="disabled"
                :min="0"
                :max="10"
                :placeholder="schema.placeholder"
                :readonly="schema.readonly"
                :name="schema.inputName"
                :step="schema.step"
                :step-strictly="schema.stepStrictly"
                :precision="schema.precision"
                :controls-position="schema.controlsPosition">
        </el-input-number>
    </el-form-item>
</template>

<script>
    import { abstractField } from "vue-form-generator";

    export default {
        mixins: [ abstractField ]
    };
</script>