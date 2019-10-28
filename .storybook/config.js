import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

//enables knobs for all our stories
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module);
