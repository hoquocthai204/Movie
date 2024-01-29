const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "96b093a07d13656ebfb00e24d16cddcd",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
