import LatestDB from '../PostsDB';
import AuthorsDB from '../AuthorsDB';

export const findAuthorName = (i) => {
    const authorFromLatestDB = LatestDB[i].author;
    return (AuthorsDB[authorFromLatestDB].name);
}

export const findAuthorPortrait = (i) => {
    const authorFromLatestDB = LatestDB[i].author;
    return (AuthorsDB[authorFromLatestDB].portrait);
}


