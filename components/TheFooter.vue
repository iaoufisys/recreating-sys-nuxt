<template>
<div class="footer" v-if="footer">
    <div class="container">
        <div>
            <a href="/">
            <NuxtImg
            :src="'/backend' + footer.data.attributes.footer.logo.data.attributes.img.data.attributes.url"
            class="footer-img"/>
            </a>
        </div>
        <div>
            <h4><span>{{ footer.data.attributes.footer.titre1 }}</span></h4>
            <p>{{ footer.data.attributes.footer.contact.data.attributes.mail }}</p>
        </div>
        <div>
            <h4><span>{{ footer.data.attributes.footer.titre2 }}</span></h4>
            <p>{{ footer.data.attributes.footer.adresse.data.attributes.rue }}</p>
            <p>{{ footer.data.attributes.footer.adresse.data.attributes.codePostal }}</p>
            <p>{{ footer.data.attributes.footer.adresse.data.attributes.ville }}</p>
        </div>
        <div>
            <h4><span>{{ footer.data.attributes.footer.titre3 }}</span></h4>

            <a :href="footer.data.attributes.footer.reseaux.data[0].attributes.lien">
            <NuxtImg
                :src="'/backend' + footer.data.attributes.footer.reseaux.data[0].attributes.icone.data.attributes.url"
                class="icon"/>
            </a>

            <a :href="footer.data.attributes.footer.reseaux.data[1].attributes.lien">
            <NuxtImg
                :src="'/backend' + footer.data.attributes.footer.reseaux.data[1].attributes.icone.data.attributes.url"
                class="icon"/>
            </a>

        </div>
    </div>
</div>
</template>

<script setup>
const api_url = "http://localhost:1337";

const { data: footer } = await useFetch(
    `${api_url}/api/footer?populate=deep`
);

</script>

<style scoped>
@import '../public/style.css';

</style>