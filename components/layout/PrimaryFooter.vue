<template>
    <footer class="footer">
        <div class="footer__block g-container">
            <div class="footer__inner">
                <div class="footer__box">
                    <div class="footer__about"> 
                        <p class="footer__about-title">O stronie</p> 

                        <p class="footer__about-desc">
                            To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami 
                            które czytam i oczywiście to czego się uczę.
                            Mam nadzieję, że zapoznasz się z moimi materiałami i dołączysz do dyskusji.
                        </p>
                    </div>
                </div>

                <div class="footer__box">
                    <header class="footer__header"> 
                        <p class="footer__header-title">Odkrywaj</p> 
                    </header>

                    <ul class="footer__list">
                        <li class="footer__item">
                            <NuxtLink class="footer__link" to="/kontakt" target="_self"> Kontakt </NuxtLink>
                        </li>

                        <li class="footer__item">
                            <NuxtLink class="footer__link" to="/o-mnie" target="_self"> O mnie </NuxtLink>
                        </li>
                    </ul>
                </div>

                <div class="footer__box">
                    <header class="footer__header">
                        <p class="footer__header-title">Obserwuj</p>
                    </header>

                    <ul class="footer__list">
                        <li class="footer__item">
                            <a class="footer__link" href="https://github.com/damianbarszcz" target="_blank"> Github </a>
                        </li>

                        <li class="footer__item">
                            <a class="footer__link" href="https://www.instagram.com/thedamianbarszcz" target="_blank"> Instagram  </a>
                        </li>

                        <li class="footer__item">
                            <a class="footer__link" href="https://twitter.com/DamianBarszcz" target="_blank"> Twitter </a>
                        </li>

                        <li class="footer__item">
                            <a class="footer__link" href="https://www.linkedin.com/in/damian-barszcz-227b0a226/" target="_blank"> Linkedin </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="footer__copyright">
                <span class="footer__copyright-caption">  © {{new Date().getFullYear()}} Barszcz Creations </span>

                <ul class="footer__list footer__list--copyright">
                    <li class="footer__item">
                        <NuxtLink class="footer__link" to="/" target="_self"> Start </NuxtLink>
                    </li>

                    <li class="footer__item">
                        <NuxtLink class="footer__link" to="/polityka-prywatnosci" target="_self"> Prywatność </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </footer> 
</template>
