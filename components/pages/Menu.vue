<template>
    <nav class="sidenav">
        <div class="sidenav__block">
            <ul class="sidenav__list">
                <li class="sidenav__item">
                    <NuxtLink to="/przeglad" target="_self" class="sidenav__link">
                        <span class="material-symbols-outlined">account_circle</span> 
                        Strona główna
                    </NuxtLink>
                </li>

                <li class="sidenav__item">
                    <NuxtLink to="#" target="_self" class="sidenav__link">
                        <span class="material-symbols-outlined">devices</span> 
                        Projekty
                    </NuxtLink>
                </li>

                <li class="sidenav__item">
                    <NuxtLink to="#" target="_self" class="sidenav__link">
                        <span class="material-symbols-outlined">reviews</span> 
                        Recenzje
                    </NuxtLink>
                </li>

                <li class="sidenav__item">
                    <NuxtLink to="#" target="_self" class="sidenav__link">
                        <span class="material-symbols-outlined">draft</span> 
                        Szkice
                    </NuxtLink>
                </li>

                <li class="sidenav__item">
                    <NuxtLink to="#" target="_self" class="sidenav__link">
                        <span class="material-symbols-outlined">info</span> 
                        Informacje
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>