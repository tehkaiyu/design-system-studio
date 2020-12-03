module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-controls",
    "@storybook/addon-a11y",
    "@storybook/addon-contexts/register",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
};
