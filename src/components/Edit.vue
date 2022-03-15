<template>
    <div class="edit">
        <div >
            <h1>Edit</h1>
        </div>
        <div id="dynamic-component-demo" class="demo">
        <router-link :to="{ name: 'home', params: { text: message}}"><button class="dynamic-component-demo-tab-button">{{ message }}</button></router-link>
    </div>
     <router-view></router-view>
<form v-on:submit.prevent="onSubmit">
    <input type="text" v-model="message" v-on:keyup.enter="updateText" style="margin: 1rem;">
    <router-link :to="{ name: 'accueil', params: { text: message}}"><button class="button">Modifier le titre</button></router-link>
</form>
    </div>
</template> 

<script>

export default {
    name: 'Edit',
    data() {
        return {
            message: 'test'
        }
    },
    props: {
        text: {
            type: String,
            default: ''
        }
    },
    mounted(){
        /* console.log(this.text)
        console.log('toto') */
        this.message = this.text
        
    },
    /* methods: {
        updateText: function() {
            this.text = new Text(this.textQUery).toMessage()
            this.textQUery = ''
        }
    } */
}
</script>


