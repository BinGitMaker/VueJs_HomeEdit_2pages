<template>
    <div class="home">
        <h1>{{ message }}</h1>
        
    </div>
    <div id="dynamic-component-demo" class="demo">
        <router-link :to="{ name: 'edit', params: { text: message }}"><button class="dynamic-component-demo-tab-button">Edit</button></router-link>
    </div>

    <router-view></router-view>
</template> 

<script>
export default {
    name: 'Home',
    data() {
        return {
            message: 'Home',
        }
    },
    props: {
        text: {
            type: String,
            default: ''
        }
    },
    mounted(){
        if( this.text ){
        this.message = this.text
        }
    }
}
</script>


