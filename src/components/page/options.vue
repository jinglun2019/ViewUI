<template>
    <div v-if="showSizer || showElevator" :class="optsClasses">
        <div v-if="showSizer" :class="sizerClasses">
            <i-select
                v-model="currentPageSize"
                :size="size"
                :placement="placement"
                :transfer="transfer"
                :disabled="disabled"
                :eventsEnabled="eventsEnabled"
                @on-change="changeSize"
            >
                <i-option v-for="item in pageSizeOpts" :key="item" :value="item" style="text-align: center"
                    >{{ item }} {{ t('i.page.page') }}</i-option
                >
            </i-select>
        </div>
        <div v-if="showElevator" :class="ElevatorClasses">
            {{ '到' }}
            <input
                ref="input"
                type="number"
                :value="_current"
                autocomplete="off"
                spellcheck="false"
                :disabled="disabled"
                @keyup.enter="changePage"
                :min="1"
            />
            {{ t('i.page.p') }}
            <i-button class="ivu-page-item jump-btn" @click="changePage">GO</i-button>
        </div>
    </div>
</template>
<script>
import iSelect from '../../components/select/select.vue';
import iOption from '../../components/select/option.vue';
import Locale from '../../mixins/locale';
import iButton from '../../components/button/button.vue';
const prefixCls = 'ivu-page';

function isValueNumber(value) {
    return /^[1-9][0-9]*$/.test(value + '');
}

export default {
    name: 'PageOption',
    mixins: [Locale],
    components: { iSelect, iOption, iButton },
    props: {
        pageSizeOpts: Array,
        showSizer: Boolean,
        showElevator: Boolean,
        current: Number,
        _current: Number,
        pageSize: Number,
        allPages: Number,
        isSmall: Boolean,
        placement: String,
        transfer: Boolean,
        disabled: Boolean,
        eventsEnabled: Boolean
    },
    data() {
        return {
            currentPageSize: this.pageSize
        };
    },
    watch: {
        pageSize(val) {
            this.currentPageSize = val;
        }
    },
    computed: {
        size() {
            return this.isSmall ? 'small' : 'default';
        },
        optsClasses() {
            return [`${prefixCls}-options`];
        },
        sizerClasses() {
            return [`${prefixCls}-options-sizer`];
        },
        ElevatorClasses() {
            return [`${prefixCls}-options-elevator`];
        }
    },
    methods: {
        changeSize() {
            this.$emit('on-size', this.currentPageSize);
        },
        changePage(event) {
            let val = this.$refs.input.value;
            let page = 0;

            if (isValueNumber(val)) {
                val = Number(val);
                if (val != this.current) {
                    const allPages = this.allPages;

                    if (val > allPages) {
                        page = allPages;
                    } else {
                        page = val;
                    }
                }
            } else {
                page = 1;
            }

            if (page) {
                this.$emit('on-page', page);
                event.target.value = page;
            }
        }
    }
};
</script>
<style lang="less" scoped>
@import '../../styles/custom.less';
.btn-small {
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    // height: 30px;
    // padding-right: 16px;
    // padding-left: 16px;
    // line-height: 30px;
    border: none;
    border-radius: 4px;
    outline: none;
    // box-shadow: 0 4px 4px 0 rgba(1, 45, 47, 0.27);
    transition: none;

    &:hover {
        color: white;
        border-color: transparent;
    }
    &:focus {
        // box-shadow: 0 4px 4px 0 rgba(1, 45, 47, 0.27);
        box-shadow: none !important;
    }
    &:focus-visible {
        outline: none;
    }

    &:active {
        color: #fff !important;
        border: none 0 !important;
    }
    &:disabled {
        color: white;
        cursor: not-allowed !important;
        background: @primary-color;
        &:hover {
            color: white !important;
            background: @primary-color !important;
        }
    }
}

.jump-btn {
    width: 30px;
    padding: 0 !important;
    font-size: 12px;
    margin-left: 8px;
}
</style>
