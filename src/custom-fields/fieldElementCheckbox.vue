<template>
    <el-form-item
            :label="schema.labelElement" :prop="schema.model">
        <el-checkbox
                :id="getFieldID(schema)"
                v-model="value"
                :autocomplete="schema.autocomplete"
                :disabled="disabled"
                :name="schema.inputName"
                :class="schema.fieldClasses"
                :checked="schema.checked"
                :label="schema.labelText">
        </el-checkbox>
    </el-form-item>
</template>

<script>
    import { abstractField } from "vue-form-generator";

    export default {
        mixins: [ abstractField ]
    };
</script>