declare module __WebpackModuleApi {
    interface RequireContext {
      (id: string): any;
      keys(): string[];
      resolve(id: string): string;
    }
  }

const importAllImages = (requireContext: __WebpackModuleApi.RequireContext) => {
    let images: { [key: string]: string } = {};
    requireContext.keys().forEach((key: string) => {
      const imageName = key.replace('./', '').replace(/\.\w+$/, '');
      images[imageName] = requireContext(key);
    });
    return images;
  };

const images2023 = importAllImages(require.context('../../assets/img/subPage/society/2023', false, /\.(png|jpe?g|svg)$/));

export default images2023;