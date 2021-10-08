<template>
    <el-form-item
            :label="schema.labelElement" :prop="schema.model">
        <el-upload
                class="upload-demo"
                v-model="value"
                :id="getFieldID(schema)"
                :class="schema.fieldClasses"
                :action="schema.action"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :multiple="schema.multiple"
                :limit="limit"
                :on-exceed="handleExceed"
                :accept="schema.accept"
                :file-list="fileList">
            <el-button :size="schema.buttonSize" :type="schema.buttonType">{{ buttonText }}</el-button>
            <div slot="tip" class="el-upload__tip">{{ tip }}</div>
        </el-upload>
    </el-form-item>
</template>

<script>
    import { abstractField } from "vue-form-generator";

    export default {
        mixins: [ abstractField ],

        data () {
            return {
                tip: this.schema.tip,
                buttonText: this.schema.buttonText,
                limit: this.schema.limit || 2,
                fileList: this.model[this.schema.model]
            };
        },

        methods: {

            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                console.log('this', this, files, fileList);
                this.$message.warning(`Максимальное кол-во файлов: ${ this.limit }`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`Вы действительно хотите удалить файл ${ file.name } ?`);
            }
        }
    };
</script>