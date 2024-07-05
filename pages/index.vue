<template>
<div class="bigcont" v-if="page && homepage">
<header class="container">
  <NuxtImg class="bg-img"
  :src="'/backend' + homepage.data.attributes.PageContent[0].imgBg.data.attributes.url"/>
  <h1>{{ homepage.data.attributes.PageContent[0].titre }}</h1>
  
  <div class="strapi-blocks">
    <StrapiBlocks :content="homepage.data.attributes.PageContent[0].texte"/>
  </div>
</header>

<section class="section-img-left">
<div class="container">
    <div>
      <NuxtImg
    :src="'/backend' + homepage.data.attributes.PageContent[1].imgBg.data.attributes.url"
    class="app-img"/>
  </div>
  <div>
    <h2>{{ homepage.data.attributes.PageContent[1].titre }}</h2>
    <div>
      <p>{{ homepage.data.attributes.PageContent[1].texte }}</p>
      <button><a :href="homepage.data.attributes.PageContent[1].bouton.lien">{{homepage.data.attributes.PageContent[1].bouton.titre}}</a></button>
    </div>
  </div>
</div>
</section>

<section class="toggle-section">
  <div class="container">
    <hr>
    <div class="smol-container">
      <h3>{{ homepage.data.attributes.PageContent[2].ListeToggle[0].titre }}</h3>
      <a @click="showTextArray[0] = !showTextArray[0]">+</a>
    </div>
    <div class="strapi-blocks">
      <StrapiBlocks v-if="showTextArray[0]" :content="homepage.data.attributes.PageContent[2].ListeToggle[0].texte"/>
    </div>
    <hr>
    <div class="smol-container">
      <h3>{{ homepage.data.attributes.PageContent[2].ListeToggle[1].titre }}</h3>
      <a @click="showTextArray[1] = !showTextArray[1]">+</a>
    </div>
    <div class="strapi-blocks">
      <StrapiBlocks v-if="showTextArray[1]" :content="homepage.data.attributes.PageContent[2].ListeToggle[1].texte"/>
    </div>
    <hr>
  </div>
</section>

</div>
</template>

<script setup>
import { StrapiBlocks } from "vue-strapi-blocks-renderer";

var numArray = 10;
var showTextArray = ref(new Array(numArray).fill(false));
// tableau pour le toggle du texte   

const api_url = "http://localhost:1337";

const { data: page } = await useFetch(
  `${api_url}/api/pages?populate=deep`
);
const { data: homepage } = await useFetch(
  `${api_url}/api/homepage?populate=deep`
);

</script>

<style>
@import '../public/style.css';

</style>
