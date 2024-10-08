declare module "alternator-plugin" {
  interface AlternatorPluginOptions {
    routerDir: string;
    ext: string;
    separateFile?: string[];
    notFoundFile?: string;
    layoutFile?: string;
    injectName?: string;
    injectFile?: string;
  }

  function AlternatorPlugin(options: AlternatorPluginOptions): {
    name: string;
    transform: (code: string, id: string) => string | undefined;
  };

  export default AlternatorPlugin;
}
