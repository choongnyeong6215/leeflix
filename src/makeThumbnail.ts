export const makeThumbnailPath = (backdropPath: string, format?: string) => {
  return `https://image.tmdb.org/t/p/${
    format ? format : "original"
  }/${backdropPath}`;
};
