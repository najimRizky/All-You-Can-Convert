<template>
    <v-container>
        <v-row>
        <v-col align="right">
            <a href="https://instagram.com/najim_80" target="blank"><img src="@/assets/instagram.png" id="instagram"></a>
            <a href="https://twitter.com/erSySz" target="blank"><img src="@/assets/twitter.png" id="twitter"></a>
            <a href="https://github.com/najimRizky" target="blank"><img src="@/assets/github.png"  id="github"></a>
            <a href="https://www.linkedin.com/in/najim-rizky" target="blank"><img src="@/assets/linkedin.png" id="linkedin" ></a>
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
    #github, #instagram, #twitter, #linkedin{
        filter: invert(48%) sepia(0%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%);
        width: 32px;
        display: inline;
        margin-left: 0px;
        margin: 10px;
        float: right;
        transition: 0.3s;
    }
    #github:hover{
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
        transform: scale(1.1);
    }
    #instagram:hover{
        filter: invert(49%) sepia(68%) saturate(1552%) hue-rotate(282deg) brightness(102%) contrast(106%);
        transform: scale(1.1);
    }
    #twitter:hover{
        filter: invert(54%) sepia(87%) saturate(3830%) hue-rotate(174deg) brightness(105%) contrast(102%);
        transform: scale(1.1);
    }
    #linkedin:hover{
        filter: invert(71%) sepia(90%) saturate(7491%) hue-rotate(189deg) brightness(100%) contrast(101%);
        transform: scale(1.1);
    }
</style>>
