<template>
  <h3>landing page</h3>
  <div>
    <NuxtImg
      v-if="page"
      :src="
        api_url + page.data.attributes.PageContent[1].imgBg.data.attributes.url
      " />
    <!-- <div class="bgImg"
            v-bind:style="{ 'background-image': 'url(' + api_url + page.data.attributes.PageContent[0].imgBg.data.attributes.url + ')' }">
        </div> -->
    <h1 v-if="page">{{ page.data.attributes.PageContent[1].titre }}</h1>
    <div v-if="page" class="bgColor">
      <div>
        <h2>{{ page.data.attributes.PageContent[1].titre }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { StrapiBlocks } from "vue-strapi-blocks-renderer";
import { useFetch } from "#app";

const api_url = "http://localhost:1337";

const { data: page } = await useFetch(
  `${api_url}/api/landing-page?populate=deep`
);
</script>

<style>
NuxtImg {
  width: 100%;
}
body {
  padding: 0;
  margin: 0;
}
.bgImg {
  height: 500px;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}
.bgColor {
  margin: 50px 0;
  padding: 30px 0;
  display: flex;
  background-color: darksalmon;
  align-items: center;
}
h1 h2 {
  text-align: center;
}
</style>
