export type Article = {
  image: {
    src: string;
    alt: string;
  };
  label?: string;
  publishDate: Date;
  title: string;
  description: string;
  articleLink?: string;
  user: {
    fullName: string;
    avatarImageSrc: string;
  };
};
