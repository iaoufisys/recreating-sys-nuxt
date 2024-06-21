<template>
<div class="bigcont" v-if="page">
  
  <div class="sidebar">
    <div class="nav-bar">
      <div>
        <img src="../public/assets/logo.png" alt="">
      </div>
      <hr class="long-hr">
      <a href="">YELLO PADEL</a>
      <hr>
      <a href="">LE PADEL</a>
      <hr>
      <a href="">AVANTAGES</a>
      <hr>
      <a href="">CONTACT</a>
    </div>
  </div>

<div>
  <header>
    <NuxtImg
      :src="'/backend' + page.data.attributes.PageContent[0].imgBg.data.attributes.url"
      class="bg-img"/>
    <div>
      <h1>{{ page.data.attributes.PageContent[0].titre[0].children[0].text }} <span>{{page.data.attributes.PageContent[0].titre[0].children[1].text}}</span> </h1>
      <hr class="long-hr">
    </div>
  </header>

  <section class="bgColor">
    <div class="container">
      <h2 class="title-relative text-center">{{ page.data.attributes.PageContent[1].titre }}</h2>
      <div class="strapi-blocks">
        <StrapiBlocks :content="page.data.attributes.PageContent[1].Texte"/>
      </div>
    </div>
  </section>

  <section class="noBg">
    <div class="container">
      <h2 class="title-relative">{{ page.data.attributes.PageContent[2].titre }}</h2>
      <hr>
      <div class="strapi-blocks">
        <StrapiBlocks :content="page.data.attributes.PageContent[2].Texte"/>
      </div>
    </div>
  </section>

  <section class="transpBg">
    <div class="container">
      <div>
        <h2 class="title-relative">{{ page.data.attributes.PageContent[3].titre }}</h2>
        <hr>
        <div class="strapi-blocks">
          <StrapiBlocks :content="page.data.attributes.PageContent[3].Texte"/>
        </div>
      </div>
      <div class="rotate-45">
        <NuxtImg
        class="img"
        :src="'/backend' + page.data.attributes.PageContent[3].image.data.attributes.url"/>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <h3> {{page.data.attributes.PageContent[4].Texte}} </h3>
    </div>
      <hr class="hr2">
  </section>

  <section class="pistesBg">
    <h4> {{page.data.attributes.PageContent[5].NombresPistes}} </h4>
    <p>Pistes de padel</p>
  </section>

  <section class="articles">
    <h2>Ils parlent de nous</h2>
    <div>
      <div>
        <NuxtImg
        class="img-articles"
        :src="'/backend' + page.data.attributes.PageContent[6].article[0].img.data.attributes.url"/>
        <h3> {{ page.data.attributes.PageContent[6].article[0].Titre }} </h3>
        <button ><a :href='page.data.attributes.PageContent[6].article[0].lien'>Lire l'article</a></button>
      </div>
      <div>
        <NuxtImg
        class="img-articles"
        :src="'/backend' + page.data.attributes.PageContent[6].article[1].img.data.attributes.url"/>
        <h3> {{ page.data.attributes.PageContent[6].article[1].Titre }} </h3>
        <button ><a :href='page.data.attributes.PageContent[6].article[1].lien'>Lire l'article</a></button>
      </div>
      <div>
        <NuxtImg
        class="img-articles"
        :src="'/backend' + page.data.attributes.PageContent[6].article[2].img.data.attributes.url"/>
        <h3> {{ page.data.attributes.PageContent[6].article[2].Titre }} </h3>
        <button ><a :href='page.data.attributes.PageContent[6].article[2].lien'>Lire l'article</a></button>
      </div>
    </div>
  </section>

  <div class="footer">
    <div>
      <div>
        <NuxtImg  
        :src="'/backend' + page.data.attributes.PageContent[7].imgBg.data.attributes.url"
        class="footer-img"/>
      </div>
      <div class="footer-cont">
        <h5>Contactez-nous</h5>
        <p>{{ page.data.attributes.PageContent[7].mail }}</p>
        <p>{{ page.data.attributes.PageContent[7].adresse }}</p>
      </div>
    </div>
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
@import '../public/style.css';
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.sidebar{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #111827;
  padding: 1em;
  width: 40%;
  align-items: center;
}
.nav-bar{
  position: fixed;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow:hidden;
  width: 15%;
  background-color: #111827;
}
.nav-bar>hr{
  border-color: white;
  border-width: 1px;
  margin : 0;
  width: 60%;
}
.nav-bar>.long-hr{
  width: 50%;
  margin: 0 auto;
}
.nav-bar>a{
  color: white;
  width: fit-content
}
.nav-bar>a:hover{
  font-size: 2em;
  color: #FDDC97;
}
.nav-bar>div{
  width: 90%;
  margin: 0 auto;
}
img{
  width: 100%;
}
button{
  cursor: pointer;
}
</style>
