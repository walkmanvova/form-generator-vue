<template>
    <el-form-item
            :label="schema.labelElement" :prop="schema.model">
        <el-radio-group
                v-model="value"
                :id="getFieldID(schema)"
                :class="schema.fieldClasses"
                :disabled="disabled">
            <el-radio
                    v-for="item in schema.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled">
            </el-radio>
        </el-radio-group>
    </el-form-item>
</template>

<script>
    import { abstractField } from "vue-form-generator";

    export default {
        mixins: [ abstractField ]
    };
</script>