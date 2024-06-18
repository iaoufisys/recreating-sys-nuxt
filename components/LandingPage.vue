<template>
    <h3>landing page</h3>
    {{ console.log("test") }}
    <div >
        <NuxtImg v-if="imageUrl" :src='imageUrl.image' />
        <!-- <div class="bgImg"
            v-bind:style="{ 'background-image': 'url(' + api_url + page.data.attributes.PageContent[0].imgBg.data.attributes.url + ')' }">
        </div> -->
        <h1 v-if="page">{{ page.data.attributes.PageContent[0].titre }}</h1>
        <div v-if="page" class="bgColor">
            <div>
                <h2>{{ page.data.attributes.PageContent[1].titre }}</h2>
                <StrapiBlocks :content="page.data.attributes.PageContent[1].Texte" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { StrapiBlocks } from 'vue-strapi-blocks-renderer';
import { useFetch } from '#app';

const api_url = "http://localhost:1337"

/*
const page = ref(null)
const imageUrl = ref(null)
*/

/*await useAsyncData('load', async () => {
    const response =  await (await fetch(`${api_url}/api/landing-page?populate=deep`)).json()
    page.value = response
    const imageResponse = await fetch(api_url + page.value.data.attributes.PageContent[0].imgBg.data.attributes.url)
    const blob = await imageResponse.blob()
    imageUrl.value = URL.createObjectURL(blob)
    return response
})*/

/*const {data: page} = await useAsyncData( () => $fetch(`${api_url}/api/landing-page?populate=deep`))
const {data: imageUrl} = await useAsyncData( async () => {
    const response = await fetch(api_url + page.value.data.attributes.PageContent[0].imgBg.data.attributes.url)
    const blob = await response.blob()
    console.log( await blobToBase64(blob))
    return await blobToBase64(blob)
})*/

const {data: page} = await useAsyncData( () => $fetch(`${api_url}/api/landing-page?populate=deep`))
const {data: imageUrl} = await useAsyncData( () => $fetch(`/api/hello?url=${api_url + page.value.data.attributes.PageContent[0].imgBg.data.attributes.url}`))

/*const {data: response} = await useAsyncData('load', async () => {
    const page =  await (await fetch(`${api_url}/api/landing-page?populate=deep`)).json()
    const imageResponse = await fetch(api_url + page.data.attributes.PageContent[0].imgBg.data.attributes.url)
    const blob = await imageResponse.blob()
    const image = await blobToBase64(blob)
    // toto
    console.log("titi")
    return Promise.resolve({page, image})
})*/

/*const response = ref(null)

const {data: resp} = await useAsyncData('load', async () => {
    const page =  await (await fetch(`${api_url}/api/landing-page?populate=deep`)).json()
    const imageResponse = await fetch(api_url + page.data.attributes.PageContent[0].imgBg.data.attributes.url)
    const blob = await imageResponse.blob()
    const image = await blobToBase64(blob)
    // toto
    //titi
    console.log("titi")
    return Promise.resolve({page, image})
})
console.log(resp)
response.value = resp.value*/


function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

</script>

<style>
NuxtImg{
    width: 100%;
}
body{
    padding: 0;
    margin: 0;
}
.bgImg{
    height: 500px;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
}
.bgColor{
    margin: 50px 0;
    padding: 30px 0;
    display: flex;
    background-color:darksalmon;
    align-items: center;
}
h1 h2{
    text-align: center;
}
</style>