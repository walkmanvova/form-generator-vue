<template>
    <el-form-item
            :label="schema.labelElement" :prop="schema.model">
        <el-cascader
                v-model="value"
                :options="schema.values"
                :placeholder="schema.placeholder"
                :disabled="schema.disabled"
                :props="{
                    expandTrigger:'hover',
                    value:'id',
                    label:'name'
                }">
        </el-cascader>
    </el-form-item>
</template>

<script>
    import { abstractField } from "vue-form-generator";

    export default {
        mixins: [ abstractField ]
    };
</script>