<template>
<div v-if="navbar">
    <div class="nav-bar" id="navbar">
        <div>
            <a href="">
                <NuxtImg
                :src="'/backend' + navbar.data.attributes.navbar.logo.data.attributes.img.data.attributes.url"
                class="logo-img"/>
            </a>
        </div>
        
        <div>
            <li class="nav-item"><nuxt-link exact :to="navbar.data.attributes.navbar.panels[0].lien.lien">{{ navbar.data.attributes.navbar.panels[0].lien.nom }}</nuxt-link></li>
            <li class="nav-item"><nuxt-link exact :to="navbar.data.attributes.navbar.panels[1].lien.lien">{{ navbar.data.attributes.navbar.panels[1].lien.nom }}</nuxt-link></li>
            <li class="nav-item"><nuxt-link exact :to="navbar.data.attributes.navbar.panels[2].lien.lien">{{ navbar.data.attributes.navbar.panels[2].lien.nom }}</nuxt-link></li>
            <li class="nav-item"><nuxt-link exact :to="navbar.data.attributes.navbar.panels[3].lien.lien">{{ navbar.data.attributes.navbar.panels[3].lien.nom }}</nuxt-link></li>
            <li class="nav-item"><nuxt-link exact :to="navbar.data.attributes.navbar.panels[4].lien.lien">{{ navbar.data.attributes.navbar.panels[4].lien.nom }}</nuxt-link></li>
            <li class="nav-item"><nuxt-link exact :to="navbar.data.attributes.navbar.panels[5].lien.lien">{{ navbar.data.attributes.navbar.panels[5].lien.nom }}</nuxt-link></li>
        </div>
    </div>
</div>
</template>

<script setup>
const api_url = "http://localhost:1337";

const { data: navbar } = await useFetch(
    `${api_url}/api/nav-bar?populate=deep`
);

</script>

<style scoped>
@import '../public/style.css';

</style>