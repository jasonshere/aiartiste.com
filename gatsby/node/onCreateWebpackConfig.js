const path = require("path");

module.exports = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /plotly.js/,
            use: loaders.null(),
          },
        ],
      },
    });
  };
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "../../src/components/"),
        "@types": path.resolve(__dirname, "../../src/types/"),
        "@styles": path.resolve(__dirname, "../../src/styles/"),
        "@utils": path.resolve(__dirname, "../../src/utils/")

        // '@icons': path.resolve(__dirname, '../../src/icons/'),
      },
      extensions: [".js", ".json", ".ts", ".tsx"]
    }
  });
};
