
const { apolloPrometheusPlugin } = require('strapi-prometheus');

// Créez l'objet de configuration du plugin en dehors de la déclaration de l'objet
const prometheusPluginConfig = {
  enabled: true,
};

module.exports = {
  plugins: [
    {
      plugin: require('strapi-prometheus'),
      config: prometheusPluginConfig,
    },
  ],
  graphql: {
    enabled: true,
    config: {
      apolloServer: {
        plugins: [apolloPrometheusPlugin], // ajoutez le plugin pour obtenir des métriques Apollo
        tracing: true, // cela doit être true pour obtenir certaines des données nécessaires à la création des métriques
      },
    },
  },
};
