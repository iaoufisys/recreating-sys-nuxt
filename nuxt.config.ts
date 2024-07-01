// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  modules: ["@nuxt/image"],
  strapi: {
    url: "http://localhost:1337",
  },
  //pour que l'url s'ajoute automatiquement devant quand on met "provider:strapi" sur une balise NuxtImg par exemple
  image: {
    domains: ["localhost:1337"],
    // config pour que NuxtImage télécharge les images de Strapi quand on veut faire du SSG (config IPX)
    alias: {
      backend: "http://localhost:1337"
    }
    // pour qu'il remplace localhost par backend quand il créer le dossier,
    // et inversement quand on appelle backend/ pour qu'il aille bien taper sur Strapi
  },
  // config pour que NuxtImage télécharge les images de Strapi quand on veut faire du SSG ( config IPX)
};
