<template>
    <div class="mask-alert">
        <div class="msg">
            {{title}}
        </div>
    </div>
</template>
<script>
export default {
    props:["title"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.mask-alert{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    .msg{
        width: 90%;
        height: 120px;
        padding: 20px;
        background: #666;
        margin: 0 auto;
        margin-top: 80%;
        border-radius: 12px;
        color: #fff;
    }
}
</style>