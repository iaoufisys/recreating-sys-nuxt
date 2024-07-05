
<template>
<div v-if="pages">
<header class="container">
    <h1>{{ pages.data[1].attributes.PageContent[0].titre }}</h1>
    <h2>{{ pages.data[1].attributes.PageContent[0].texte[0].children[0].text }}</h2>
    <NuxtImg class="bg-img"
    :src="'/backend' + pages.data[1].attributes.PageContent[0].imgBg.data.attributes.url"/>
</header>

<section class="section-blocks">
<div class="container">
    <div class="block">
        <NuxtImg class="img-logo"
        :src="'/backend' + pages.data[1].attributes.PageContent[1].BlocksArticlesExternes[0].articles_externe.data.attributes.img.data.attributes.url"/>            
        <p>{{ pages.data[1].attributes.PageContent[1].BlocksArticlesExternes[0].articles_externe.data.attributes.description }}</p>
        <button><a :href="pages.data[1].attributes.PageContent[1].BlocksArticlesExternes[0].articles_externe.data.attributes.bouton.lien">{{ pages.data[1].attributes.PageContent[1].BlocksArticlesExternes[0].articles_externe.data.attributes.bouton.titre }}</a></button>
    </div>
    <div class="block">
        <NuxtImg class="img-logo"
        :src="'/backend' + pages.data[1].attributes.PageContent[1].BlocksArticlesExternes[1].articles_externe.data.attributes.img.data.attributes.url"/>            
        <p>{{ pages.data[1].attributes.PageContent[1].BlocksArticlesExternes[1].articles_externe.data.attributes.description }}</p>
        <button><a :href="pages.data[1].attributes.PageContent[1].BlocksArticlesExternes[0].articles_externe.data.attributes.bouton.lien">{{ pages.data[1].attributes.PageContent[1].BlocksArticlesExternes[1].articles_externe.data.attributes.bouton.titre }}</a></button>
    </div>
    <div class="block">
        <NuxtImg class="img-logo"
        :src="'/backend' + pages.data[1].attributes.PageContent[1].BlocksArticlesExternes[1].articles_externe.data.attributes.img.data.attributes.url"/>            
        <p>{{ pages.data[1].attributes.PageContent[1].BlocksArticlesExternes[1].articles_externe.data.attributes.description }}</p>
        <button><a :href="pages.data[1].attributes.PageContent[1].BlocksArticlesExternes[0].articles_externe.data.attributes.bouton.lien">{{ pages.data[1].attributes.PageContent[1].BlocksArticlesExternes[1].articles_externe.data.attributes.bouton.titre }}</a></button>
    </div>
</div>
</section>

</div>
</template>

<script setup>
const api_url = "http://localhost:1337";

const { data: pages } = await useFetch(
    `${api_url}/api/pages?populate=deep`
);

</script>