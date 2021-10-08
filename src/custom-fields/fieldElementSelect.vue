<template>
    <el-form-item
            :label="schema.labelElement" :prop="schema.model">
        <el-select
                v-model="value"
                :placeholder="schema.placeholder"
                :disabled="schema.disabled"
                :clearable="schema.clearable"
                :multiple="schema.multiple">
            <el-option
                    v-for="item in schema.values"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
            </el-option>
        </el-select>
    </el-form-item>
</template>

<script>
    import { abstractField } from "vue-form-generator";

    export default {
        mixins: [ abstractField ]
    };
</script>