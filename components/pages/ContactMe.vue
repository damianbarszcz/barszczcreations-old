<script>
    export default{
        props:{
            value:{
                type:Object,
                required:true,
            }
        },
        data() {
            return {
                contactFields: { ...this.value }
            }
        },
    }
</script>

<template>
    <section class="contact_me">
        <div class="contact_me__block g-container">
            <div class="contact_me__inner">
                <form class="contact_me__form" @submit.prevent="contactSubmitForm">
                    <div class="contact_me__form-inline">
                        <div class="contact_me__form-group">
                            <label for="first_name" class="form__label">Imię:</label>
                            <input v-model="contactFields.firstname" name="first_name" class="form__input" type="text" tabindex="1" />
                        </div>
    
                        <div class="contact_me__form-group">
                            <label for="last_name" class="form__label">Nazwisko:</label>
                            <input v-model="contactFields.lastname" name="last_name" class="form__input" type="text" tabindex="2" />
                        </div>
                    </div>
                            
                    <div class="contact_me__form_group">
                        <label for="email" class="form__label">Adres email:</label>
                        <input v-model="contactFields.email" name="email" class="form__input" type="text"  tabindex="3"/>
                    </div>

                    <div class="contact_me__form_group">
                        <label for="subject" class="form__label">Temat:</label>
                        <input v-model="contactFields.subject" name="subject" class="form__input" type="text"  tabindex="4"/>
                    </div>
    
                    <div class="contact_me__form_group">
                        <label for="message" class="form__label">Wiadomość:</label>
                        <textarea v-model="contactFields.message" name="message" class="form__textarea" rows="4" tabindex="5"></textarea>
                    </div>    
                            
                    <div class="contact_me__form-inline">
                        <div class="contact_me__form-recaptcha"></div>
    
                        <div class="contact_me__form-box">
                            <button type="submit" class="btn btn_lg btn_purple" tabindex="6"> Wyślij </button>
                        </div>
                    </div>  
                </form>
            </div>   
        </div>
    </section>
</template>