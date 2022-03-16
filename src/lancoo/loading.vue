<template>
    <Spin
        class="loading"
        fix
        :style="{
            visibility:
                visible || !delayComplete ? 'visible' : 'hidden'
        }"
    >
        <span
            :class="[
                'ant-spin-dot',
                'ant-spin-dot-spin',
                size === 'large' && 'ant-spin-lg'
            ]"
            ><i class="ant-spin-dot-item"></i
            ><i class="ant-spin-dot-item"></i
            ><i class="ant-spin-dot-item"></i
            ><i class="ant-spin-dot-item"></i
        ></span>
    </Spin>
</template>

<script>
import Spin from '../components/spin/spin.vue';
// 一般不直接使用此组件，使用v-loading指令即可
export default {
    components: { Spin },
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'middle'
        }
    },
    data() {
        return {
            delayComplete: false
        };
    },
    watch: {
        // 加个延时，以免动画太快
        visible: {
            handler: function delayFn(val) {
                if (val) {
                    this.delayComplete = false;
                    setTimeout(() => {
                        this.delayComplete = true;
                    }, 210);
                } else {
                    setTimeout(() => {
                        this.delayComplete = true;
                    }, 210);
                }
            },
            immediate: true
        }
    }
};
</script>

<style lang="less" scoped>
@import '../styles/custom.less';
// ant design的Spin组件样式，css部分复制过来了

.ant-spin {
    font-size: 14px;
    font-feature-settings: 'tnum';
    font-variant: tabular-nums;
    line-height: 1.5715;
    text-align: center;
    list-style: none;
}
.ant-spin-dot-spin {
    transform: rotate(45deg);
    -webkit-animation: antrotate 1.2s infinite linear;
    animation: antRotate 1.2s infinite linear;
}
@keyframes antRotate {
    to {
        transform: rotate(405deg);
    }
}

.ant-spin-dot {
    position: relative;
    display: inline-block;
    width: 1em;
    height: 1em;
    font-size: 20px;
}
.ant-spin-dot-item {
    position: absolute;
    display: block;
    width: 9px;
    height: 9px;
    background-color: @primary-color;
    border-radius: 100%;
    opacity: 0.3;
    transform: scale(0.75);
    transform-origin: 50% 50%;
    -webkit-animation: antspinmove 1s infinite linear alternate;
    animation: antSpinMove 1s infinite linear alternate;
}
.ant-spin-dot-item:nth-child(1) {
    top: 0;
    left: 0;
}
.ant-spin-dot-item:nth-child(2) {
    top: 0;
    right: 0;
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
}
.ant-spin-dot-item:nth-child(3) {
    right: 0;
    bottom: 0;
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
}
.ant-spin-dot-item:nth-child(4) {
    bottom: 0;
    left: 0;
    -webkit-animation-delay: 1.2s;
    animation-delay: 1.2s;
}
@keyframes antSpinMove {
    to {
        opacity: 1;
    }
}
// 大尺寸
.ant-spin-lg {
    font-size: 32px;
}
.ant-spin-lg .ant-spin-dot-item {
    width: 14px;
    height: 14px;
}
</style>
