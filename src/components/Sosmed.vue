<template>
    <v-container>
        <v-row>
          <v-col align="right">
            <a href="https://instagram.com/najim_80" target="blank"><img src="@/assets/instagram.png"></a>
            <a href="https://twitter.com/erSySz" target="blank"><img src="@/assets/twitter.png"></a>
            <a href="https://github.com/najimRizky" target="blank"><img src="@/assets/linkedin.png"></a>
            <a href="https://www.linkedin.com/in/najim-rizky" target="blank"><img src="@/assets/github.png"></a>
          </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Sosmed',
}
</script>

<style scoped>
    img{
        filter: invert(48%) sepia(0%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%);
        width: 32px;
        display: inline;
        margin-left: 0px;
        margin: 10px;
        float: right;
        transition: 0.3s;
    }
    img:hover{
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
        transform: scale(1.1);
    }
</style>>
