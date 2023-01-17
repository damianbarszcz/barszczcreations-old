
<script>
export default{
    data(){
        return{
            loading: false,
            success: false,
            errored: false,
            firstname: "",
            lastname: "",
            email: "",
            subject: "",
            message: ""
        };
    },

    methods:{
        sendMessage(){
            this.loading = true;
            this.$axios
            .post("/messages", {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                subject: this.subject,
                message: this.message
            }).then(response => {
                this.success = true
                this.errored = false
            })

            .catch(error => {
                this.errored = true
            })
            .finally(() => {
                this.loading = false
            });

        }
    }
}
</script>

<template>
     <div>
        <Navigation /> 

        <section class="contact_banner">
            <div class="contact_banner__block g-container">
                <header class="contact_banner__header">
                    <h1 class="contact_banner__header-title">Skontaktuj się</h1>

                    <p class="contact_banner__header-desc">Jeśli interesuje Cię współpraca biznesowa ze mną, to masz możliwość skorzystania z formularza kontaktowego.</p>
                </header>
            </div>
        </section>

        <section class="contact_me">
            <div class="contact_me__block g-container">
                <div class="contact_me__inner">
                    <div v-if="success" class="rounded bg-indigo-500 text-white text-lg p-4">
                        Great! Your message has been sent successfully. I will try to respond
                        quickly.
                    </div>

                    <form v-else @submit.prevent="sendMessage" class="contact_me__form">
                        <div v-if="errored" class="rounded bg-red-200 text-lg p-4">
                            Bummer, Something went wrong. Did you fill out all of the fields?
                        </div>

                        <div class="contact_me__form-inline">
                            <div class="contact_me__form-group">
                                <label for="first_name" class="form__label">Imię:</label>
                                <input v-model="firstname" name="first_name" class="form__input" type="text" tabindex="1" />
                            </div>

                            <div class="contact_me__form-group">
                                <label for="last_name" class="form__label">Nazwisko:</label>
                                <input v-model="lastname" name="last_name" class="form__input" type="text" tabindex="2" />
                            </div>
                        </div>
                        
                        <div class="contact_me__form_group">
                            <label for="email" class="form__label">Adres email:</label>
                            <input v-model="email" name="email" class="form__input" type="text"  tabindex="3"/>
                        </div>

                        <div class="contact_me__form_group">
                            <label for="subject" class="form__label">Temat:</label>
                            <input v-model="subject" name="subject" class="form__input" type="text"  tabindex="4"/>
                        </div>

                        <div class="contact_me__form_group">
                            <label for="message" class="form__label">Wiadomość:</label>
                            <textarea v-model="message" name="message" class="form__textarea" rows="4" tabindex="5"></textarea>
                        </div>    
                        
                        <div class="contact_me__form-inline">
                            <div class="contact_me__form-recaptcha"></div>

                            <div class="contact_me__form-box">
                                <button type="submit" class="btn btn_lg btn_purple" tabindex="6"> {{ loading ? "Wysyłanie wiadomości..." : "Wyślij" }} </button>
                            </div>
                        </div>  
                    </form>
                </div>   
            </div>
        </section>

        <Footer />
    </div>
</template>
