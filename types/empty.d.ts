import Vue from 'vue';

export const Empty: EmptyClass;

export declare class EmptyClass extends Vue {
    // 是否可见
    visible?: boolean;
    // 显示的内容，默认“暂无内容”
    text?: string;
    // 是否显示图片，默认true
    isShowImg?: boolean;
    // 是否显示文字，默认true
    isShowText?: boolean;
}
