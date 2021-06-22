<template>
    <div class="row center-align s12">
        <div class="col s4">
            <img src="../assets/onlineDr.jpg" class="responsive-img">
        </div>
        <div id="form" class="col s8">
            <h3>Registrate</h3>
            <div class="row s5 center-align">
                <input type="text" placeholder="Nombres" class="validate">
            </div>
            <div class="row s5 center-align">
                <input type="text" placeholder="Edad" class="validate">
            </div>
            <div class="row s5 center-align">
                <input type="text" placeholder="Genero" class="validate">
            </div>
            <div class="row s5 center-align">
                <input type="text" placeholder="E-mail" class="validate">
            </div>
            <div class="row s5 center-align">
                <a class="btn waves-effect" v-on:click="register()">Empezar</a>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    methods:{
        register(){
            console.log('Registrado');
        }
    }
}
</script>
<style>
    #form{
        margin-top: 5%;
    }
    input[type=text]:not(.browser-default){
        width: 20%;
        border: 1px solid #94EBDC;
        border-radius: 50px;
        text-indent: 32%;
    }
    input[type=text]:not(.browser-default):focus:not([readonly]){
        border-bottom: 1px solid #94EBDC; 
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .btn-large, .btn-small, .btn{
        border-radius: 50px;
        background-color: #94EBDC;
        color: #9E5E44;
        width: 20%;
    }
    h3{
        color: #9E5E44;
        font-weight: bold;
    }
    img{
        border-radius: 50px;
        margin-top: 21%;
        margin-left: 20%;
    }
</style>