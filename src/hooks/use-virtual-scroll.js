// 虚拟滚动hooks
// 使用示例,只支持垂直滚动,需配合vuescroll组件使用
//  <vue-scroll
//       ref="vueScrollRef"
//       @handle-scroll="onVirtualScroll"
//       style="width:300px;height:300px;overflow:auto"
//  >
//       <div :style="wrapperStyles">
//         <div
//           style="height:50px;border:1px solid yellow"
//           v-for="item in list"
//           :key="item"
//           :class="'x' + item"
//         >
//           {{item}}
//         </div>
//       </div>
//     </vue-scroll>
//
//   const { list, onVirtualScroll, wrapperStyles } = useVirtualScroll(
//     Array.from(Array(84888).keys()),
//       {
//         overScan: 2,
//         itemHeight: 50,
//         viewCount: 6
//       }
//   )
//   return { list, onVirtualScroll, wrapperStyles }

import Vue from 'vue';
import VueCompositionAPI, { computed, unref, ref } from '@vue/composition-api';

Vue.use(VueCompositionAPI);

export function useVirtualScroll(sourceArray, { overScan = 5, itemHeight, viewCount }) {
    if (!itemHeight || !viewCount) {
        // 参数不完整则不启用虚拟滚动
        return {
            wrapperStyles: {},
            onVirtualScroll: () => {},
            list: sourceArray
        };
    }
    const array = computed(() => {
        return unref(sourceArray);
    });

    const scrollTop = ref(0);
    const onVirtualScroll = vertical => {
        scrollTop.value = vertical.scrollTop;
    };

    const viewIndex = computed(() => {
        return parseInt(scrollTop.value / itemHeight, 10);
    });

    const preIndex = computed(() => {
        const tmpPreIndex = viewIndex.value - overScan;
        return tmpPreIndex > 0 ? tmpPreIndex : viewIndex.value;
    });

    const suffixIndex = computed(() => {
        const tmpSuffixIndex = viewCount + overScan + viewIndex.value + 1;
        return tmpSuffixIndex > array.value.length ? array.value.length : tmpSuffixIndex;
    });

    const wrapperStyles = computed(() => {
        const paddingTop = preIndex.value * itemHeight;
        return {
            paddingTop: `${paddingTop}px`,
            paddingBottom: `${
                array.value.length * itemHeight - paddingTop - (suffixIndex.value - preIndex.value) * itemHeight
            }px`
        };
    });

    const list = computed(() => {
        return array.value.slice(preIndex.value, suffixIndex.value);
    });

    return {
        onVirtualScroll,
        list,
        wrapperStyles,
        scrollTop,
        preIndex,
        suffixIndex
    };
}
