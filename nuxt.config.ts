// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  modules: ["@nuxt/image"],
  strapi: {
    url: "http://localhost:1337",
  },
  image: {
    domains: ["localhost:1337"],
  },
};
