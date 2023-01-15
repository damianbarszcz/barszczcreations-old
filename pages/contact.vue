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
                    <form class="contact_me__form">
                        <div class="contact_me__form-inline">
                            <div class="contact_me__form-group">
                                <label for="first_name" class="form__label">Imię:</label>
                                <input name="first_name" class="form__input" type="text" tabindex="1" />
                            </div>

                            <div class="contact_me__form-group">
                                <label for="last_name" class="form__label">Nazwisko:</label>
                                <input name="last_name" class="form__input" type="text" tabindex="2" />
                            </div>
                        </div>
                        
                        <div class="contact_me__form_group">
                            <label for="email" class="form__label">Adres email:</label>
                            <input name="email" class="form__input" type="text"  tabindex="3"/>
                        </div>

                        <div class="contact_me__form_group">
                            <label for="subject" class="form__label">Temat:</label>
                            <input name="subject" class="form__input" type="text"  tabindex="4"/>
                        </div>

                        <div class="contact_me__form_group">
                            <label for="message" class="form__label">Wiadomość:</label>
                            <textarea name="message" class="form__textarea" rows="4" tabindex="5"></textarea>
                        </div>    
                        
                        <div class="contact_me__form-inline">
                            <div class="contact_me__form-recaptcha"></div>
                            <div>
                                <button type="submit" class="btn btn_normal btn_purple" tabindex="6">Wyślij</button>
                            </div>
                        </div>  
                    </form>
                </div>   
            </div>
        </section>

        <Footer />
    </div>
</template>