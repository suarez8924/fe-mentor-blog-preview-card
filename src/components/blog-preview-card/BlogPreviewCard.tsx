import { Article } from '../../types';
import getFormattedDate from '../../utils/getFormattedDate';
import styles from './BlogPreviewCard.module.scss';

interface BlogPreviewCardProps {
  article: Article;
}

const BlogPreviewCard = ({ article }: BlogPreviewCardProps) => {
  const { image, label, publishDate, articleLink, title, description, user } =
    article;
  return (
    <div className={styles.blogPreviewCard}>
      <picture className={styles.imageWrapper}>
        <img
          className={styles.articleImage}
          src={image.src}
          alt={image.alt || ''}
        />
      </picture>
      <div className={styles.cardMainContent}>
        {label && <span className={styles.label}>{label}</span>}
        <p className={styles.publishedDate}>
          Published {getFormattedDate(publishDate)}
        </p>
        <a
          className={styles.articleLink}
          href={articleLink || ''}
          target="_blank"
        >
          <h1 className={styles.title}>{title}</h1>
        </a>
        <p className={styles.description}>{description}</p>
        <div className={styles.user}>
          <img src={user.avatarImageSrc} alt="" />
          <p className={styles.userName}>{user.fullName}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPreviewCard;
