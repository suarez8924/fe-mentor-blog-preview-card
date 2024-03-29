import styles from './App.module.scss';
import BlogPreviewCard from './components/blog-preview-card/BlogPreviewCard';
import { Article } from './types';
import BlogImage from './assets/images/illustration-article.svg';
import AvatarImage from './assets/images/image-avatar.webp';

const ARTICLE: Article = {
  image: {
    src: BlogImage,
    alt: '',
  },
  label: 'Learning',
  publishDate: new Date(2023, 11, 21),
  title: 'HTML & CSS foundations',
  description:
    '  These languages are the backbone of every website, defining structure, content, and presentation.',
  articleLink: 'https://www.frontendmentor.io',
  user: {
    fullName: 'Greg Hooper',
    avatarImageSrc: AvatarImage,
  },
};

function App() {
  return (
    <main className={styles.app}>
      <BlogPreviewCard article={ARTICLE} />
      <div className={styles.attribution}>
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href="https://www.frontendmentor.io/profile/suarez8924">
          Javier Suarez
        </a>
        .
      </div>
    </main>
  );
}

export default App;
