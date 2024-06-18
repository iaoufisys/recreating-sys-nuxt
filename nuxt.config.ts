// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  modules: ["@nuxt/image"],
  strapi: {
    url: "http://localhost:1337",
  },
  image: {
    domains: ["localhost:1337"],
    alias: {
      backend: "http://localhost:1337"
    }
  },
  // config pour que NuxtImage télécharge les images de Strapi quand on veut faire du SSG ( config IPX)
};
