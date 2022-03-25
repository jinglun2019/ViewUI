import Vue from 'vue';

export const Loading: LoadingClass;

export declare class LoadingClass extends Vue {
    // 是否可见
    visible?: boolean;
    // 尺寸,默认middle
    type?: 'middle' | 'small' | 'large';
}
