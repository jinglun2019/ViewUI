<template>
    <div v-if="visible" class="empty-box">
        <div>
            <img
                v-if="showImg"
                class="empty-img"
                :style="{
                    display: 'block',
                    marginBottom: `${showText ? 10 : 0}px`
                }"
                :src="require('../../assets/empty.png')"
            />
            <div
                style="color: #7a7a7a; text-align: center"
                v-if="showText"
            >
                {{ text }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: '暂无内容'
        },
        showImg: {
            type: Boolean,
            default: true
        },
        showText: {
            type: Boolean,
            default: true
        }
    }
};
</script>

<style lang="less" scoped>
.empty-box {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
