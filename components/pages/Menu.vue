<template>
    <nav class="sidenav">
        <div class="sidenav__block">
            <ul class="sidenav__list">
                <li class="sidenav__item">
                    <NuxtLink to="/przeglad" target="_self" class="sidenav__link  sidenav__link--active" tabindex="1">
                        <span class="material-symbols-outlined">account_circle</span> 
                        <span class="sidenav__link-caption">Strona główna</span>
                    </NuxtLink>
                </li>

                <li class="sidenav__item">
                    <NuxtLink to="#" target="_self" class="sidenav__link" tabindex="2">
                        <span class="material-symbols-outlined">devices</span> 
                        <span class="sidenav__link-caption">Projekty</span>
                    </NuxtLink>
                </li>

                <li class="sidenav__item">
                    <NuxtLink to="#" target="_self" class="sidenav__link" tabindex="3">
                        <span class="material-symbols-outlined">reviews</span> 
                        <span class="sidenav__link-caption">Recenzje</span>
                    </NuxtLink>
                </li>

                <li class="sidenav__item">
                    <NuxtLink to="#" target="_self" class="sidenav__link" tabindex="4">
                        <span class="material-symbols-outlined">draft</span> 
                        <span class="sidenav__link-caption">Szkice</span>
                    </NuxtLink>
                </li>

                <li class="sidenav__item">
                    <NuxtLink to="#" target="_self" class="sidenav__link" tabindex="5">
                        <span class="material-symbols-outlined">info</span> 
                        <span class="sidenav__link-caption">Informacje</span>
                    </NuxtLink>
                </li>

                <li class="sidenav__item">
                    <NuxtLink to="#" target="_self" class="sidenav__link" tabindex="5">
                        <span class="material-symbols-outlined">logout</span> 
                        <span class="sidenav__link-caption">Wyloguj</span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>