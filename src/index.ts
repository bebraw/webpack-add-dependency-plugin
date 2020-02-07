import webpack from "webpack";

interface AddDependencyPluginOptions {
  path: string;
}

class AddDependencyPlugin implements webpack.Plugin {
  private readonly options: AddDependencyPluginOptions;

  constructor(options: AddDependencyPluginOptions) {
    this.options = options;
  }

  plugin = (
    compilation: webpack.compilation.Compilation,
    callback: () => void
  ) => {
    const { path } = this.options;

    compilation.fileDependencies.add(path);

    callback();
  };

  apply(compiler: webpack.Compiler) {
    compiler.hooks.emit.tapAsync("AddDependencyPlugin", this.plugin);
  }
}

export { AddDependencyPlugin };
