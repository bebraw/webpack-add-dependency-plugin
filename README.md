# webpack-add-dependency-plugin

In case you are including files to a webpack build indirectly, i.e. through [mini-html-webpack-plugin](https://www.npmjs.com/package/mini-html-webpack-plugin), then it's likely webpack build process won't be aware of them while you are developing and running the project through webpack-dev-server or a similar solution. _webpack-add-dependency-plugin_ solves this issue by letting you make webpack aware of these files.

**Example:**

```js
import { AddDependencyPlugin } from "webpack-add-dependency-plugin";

module.exports = {
  ...
  plugins: [new AddDependencyPlugin({ path: "./templates/page.html" })],
};
```

Most likely you'll generate these declarations programmatically using tools like [glob](https://www.npmjs.com/package/glob) and [webpack-merge](https://www.npmjs.com/package/webpack-merge) but above should give you idea of the basic API.
