<script>
  import AccountNavigation from '@/components/navigation/AccountNavigation.vue'
  import Sidenav from '@/components/pages/Menu.vue'
  import Dashboard from '@/components/pages/Dashboard.vue'

  export default {
    components: {
        AccountNavigation,
        Dashboard,
        Sidenav,
    }
  }
</script>

<template>
    <main>
        <AccountNavigation />
        <Sidenav />
        <Dashboard  />
    </main>
</template>