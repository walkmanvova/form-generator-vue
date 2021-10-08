<template>
    <el-form-item
            :label="schema.labelElement" :prop="schema.model">
        <el-input
                :type="schema.inputType"
                v-model="value"
                :id="getFieldID(schema)"
                :class="schema.fieldClasses"
                :disabled="disabled"
                :maxlength="schema.max"
                :minlength="schema.min"
                :show-word-limit="schema.showWordLimit"
                :placeholder="schema.placeholder"
                :readonly="schema.readonly"
                :name="schema.inputName"
                :clearable="schema.clearable"
                :show-password="schema.showPassword">
        </el-input>
    </el-form-item>
</template>

<script>
    import { abstractField } from "vue-form-generator";

    export default {
        mixins: [ abstractField ]
    };
</script>