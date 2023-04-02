<script>
  import LoginBox from '@/components/pages/LoginBox.vue'

  export default {
    components: {
        LoginBox
    },

    head(){
        return{
            title: "Logowanie | Barszcz Creations"
        }
    },
  }
</script>

<template>
    <LoginBox />
</template>