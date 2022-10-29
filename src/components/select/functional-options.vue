<script>
const returnArrayFn = () => [];

export default {
    props: {
        options: {
            type: Array,
            default: returnArrayFn
        },
        slotOptions: {
            type: Array,
            default: returnArrayFn
        },
        slotUpdateHook: {
            type: Function,
            default: () => {}
        },
        wrapperStyles: {
            type: Object
        }
    },
    // if use functional, there will be memory leaks
    // functional: true,
    render(h) {
        // to detect changes in the $slot children/options we do this hack
        // so we can trigger the parents computed properties and have everything reactive
        // although $slot.default is not
        if (this.slotOptions !== this.$parent.$slots.default) this.slotUpdateHook();
        return h('ul', null, [
            h('div', { class: 'wrapper', style: this.wrapperStyles }, [this.$slots.default, this.options])
        ]);
    }
};
</script>
