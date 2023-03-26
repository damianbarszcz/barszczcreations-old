<script>
  import Dashboard from '@/components/pages/Dashboard.vue'
  import Menu from '@/components/pages/Menu.vue'

  export default {
    components: {
        Dashboard,
        Menu,
    }
  }
</script>

<template>
    <main>
        <Menu />
        <Dashboard  />
    </main>
</template>