
<script>
    import PrimaryNavigation from '@/components/navigation/PrimaryNavigation.vue'
    import PrimaryFooter from '@/components/layout/PrimaryFooter.vue'
    import ContactBanner from '@/components/pages/ContactBanner.vue'
    import ContactMe from '@/components/pages/ContactMe.vue'

    export default {
        components: {
            PrimaryNavigation,
            PrimaryFooter,
            ContactBanner,
            ContactMe
        },
        
        data(){
            return{
                contactFields:{
                    loading: false,
                    success: false,
                    errored: false,
                    firstname: "",
                    lastname: "",
                    email: "",
                    subject: "",
                    message: ""
                }
            };
        },

        head(){
            return{
                title: "Kontakt | Barszcz Creations"
            }
        },

        methods:{
            contactSubmitForm(){
                // Submit form logic here
            }
        }
    }
</script>

<template>
     <div>
        <PrimaryNavigation />

        <ContactBanner  />

        <ContactMe v-model="contactFields" />

        <PrimaryFooter />
    </div>
</template>
