<template>
    <div>
        <div style="width: 200px; display: inline-block; height: 100px"></div>
        <div style="width: calc(100vw - 600px); display: inline-block">
            <Table :columns="columns4" :height="700" :data="data11"></Table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            columns4: [
                {
                    type: 'index',
                    width: 40,
                    align: 'center'
                },
                {
                    title: 'ID',
                    key: 'id'
                },
                {
                    title: '姓名',
                    key: 'name'
                },
                {
                    title: '数值 1',
                    key: 'amount1'
                },
                {
                    title: '数值 2',
                    key: 'amount2'
                },
                {
                    title: '数值 3',
                    key: 'amount3'
                }
            ],
            data11: [
                {
                    id: '12987122',
                    name: '王小虎',
                    amount1: '234',
                    amount2: '3.2',
                    amount3: 10
                },
                {
                    id: '12987123',
                    name: '王小虎',
                    amount1: '165',
                    amount2: '4.43',
                    amount3: 12
                },
                {
                    id: '12987124',
                    name: '王小虎',
                    amount1: '324',
                    amount2: '1.9',
                    amount3: 9
                },
                {
                    id: '12987125',
                    name: '王小虎',
                    amount1: '621',
                    amount2: '2.2',
                    amount3: 17
                },
                {
                    id: '12987126',
                    name: '王小虎',
                    amount1: '539',
                    amount2: '4.1',
                    amount3: 15
                }
            ]
        };
    }
};
</script>
