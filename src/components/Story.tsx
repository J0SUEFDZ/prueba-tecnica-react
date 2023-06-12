import useSWR from "swr";
import { getItemInfo } from "../services/hacker-news";
import { Link } from "wouter";
import { storyHeader, storyFooter, story, storyLink } from "./Story.css";
import StoryLoader from "./StoryLoader";
import { getRelativeTime } from "../utils/getRelativeTime";

export const Story = (props: { id: number; index: number }) => {
  const { id, index } = props;
  const { data, isLoading } = useSWR(`story/${id}`, () => getItemInfo(id));
  if (isLoading) return <StoryLoader />;
  const { by, kids, score, title, url, time } = data;

  let domain = "";
  try {
    domain = new URL(url).hostname.replace("www.", "");
  } catch {}

  const relativeTime = getRelativeTime(time);
  return (
    <article className={story}>
      <header className={storyHeader}>
        <small className="">{index + 1}.</small>
        <a className="" href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
        <a className={storyLink} href={url} target="_blank" rel="noreferrer">
          ({domain})
        </a>
      </header>
      <footer className={storyFooter}>
        <span>{score} points</span>
        <Link className={storyLink} href={`/item/${id}`}>
          by {by}
        </Link>
        <Link className={storyLink} href={`/item/${id}`}>
          {relativeTime}
        </Link>
        <Link className={storyLink} href={`/item/${id}`}>
          {kids?.length || "0"} comments
        </Link>
      </footer>
    </article>
  );
};
