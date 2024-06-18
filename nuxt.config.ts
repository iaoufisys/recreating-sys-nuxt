import { Static } from "vue";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  modules: ['@nuxtjs/strapi', "@nuxt/image"],
  // buildModules: [
  //   // Next Image module https://image.nuxtjs.org/components/nuxt-img
  //   ['@nuxt/image', {
  //       provider: 'static',
  //       dir: "assets/images",
  //   }],
  // ],
  strapi: {
    url: 'http://localhost:1337'
  },
  image: {
    strapi: {
      baseURL: 'http://localhost:1337'
    }
  },
  target : Static,
  ssr: true,
}
