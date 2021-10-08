<template>
    <el-form-item
            :label="schema.labelElement" :prop="schema.model">
        <el-input
                type="textarea"
                v-model="value"
                :id="getFieldID(schema)"
                :class="schema.fieldClasses"
                :disabled="disabled"
                :maxlength="schema.max"
                :minlength="schema.min"
                :placeholder="schema.placeholder"
                :readonly="schema.readonly"
                :rows="schema.rows || 2"
                :autosize="schema.autosize"
                :name="schema.inputName">
        </el-input>
    </el-form-item>
</template>

<script>
    import { abstractField } from "vue-form-generator";

    export default {
        mixins: [ abstractField ]
    };
</script>