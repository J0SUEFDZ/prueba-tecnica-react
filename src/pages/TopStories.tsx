import useSWRInfinite from "swr/infinite";

import { getTopStories } from "../services/hacker-news";
import { Story } from "../components/Story";

export default function TopStoriesPage() {
  // const { data } = useSWR("stories", () => getTopStories(1, 10));
  const { data, isLoading, size, setSize } = useSWRInfinite(
    (index) => `stories/${index + 1}`,
    (key) => {
      const [, page] = key.split("/");
      return getTopStories(Number(page), 10);
    }
  );
  const stories = data?.flat();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {stories?.map((id: number, index: number) => (
          <li key={id}>
            <Story id={id} index={index} />
          </li>
        ))}
      </ul>

      <button onClick={() => setSize(size + 1)}>Load more...</button>
    </>
  );
}
