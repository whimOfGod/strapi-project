var apolloPrometheusPlugin = require('strapi-prometheus').apolloPrometheusPlugin;
// Créez l'objet de configuration du plugin en dehors de la déclaration de l'objet
var prometheusPluginConfig = {
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
                plugins: [apolloPrometheusPlugin],
                tracing: true, // cela doit être true pour obtenir certaines des données nécessaires à la création des métriques
            },
        },
    },
};
