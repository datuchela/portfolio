import { useQuery } from "@tanstack/react-query";

// Components
import Projects from "../components/Projects";
import CopyIcon from "../components/CopyIcon";

const fetchRepos = async () => {
  const res = await fetch("https://api.github.com/users/datuchela/repos");
  const data = await res.json();
  if (res.status !== 200) throw Error(data.message);
  return data;
};

export default function Index({ isDarkMode }: { isDarkMode: boolean }) {
  const {
    data: repos,
    isLoading,
    isError,
    error,
  } = useQuery<Project[], { message: string }>(["repos"], fetchRepos, {
    refetchOnWindowFocus: false,
    retry: 2,
  });

  return (
    <div className="lg:flex justify-around">
      <article>
        <h2>My web dev journey so far:</h2>
        <p>
          Studied Physics in Tbilisi State University, got into programming when I was introduced to
          Physics-based Modeling and Machine Learning Fundamentals.
        </p>
        <p>
          Started programming in Python, made simple console applications, then transitioned into
          web development, made static pages with HTML and CSS with little to no JavaScript at all.
        </p>
        <p>
          When I felt like that wasn't enough, made a small project using Django. It wasn't easy,
          since I had almost no knowledge of how modern web worked, I thought the only way for my
          applications to be interactive was through backend, until I realized that I needed
          JavaScript for that
        </p>
        <h4>And here comes javascript...</h4>
        <p>
          Came across React in the very beginning of my javascript journey, this was blessing and a
          curse at the same time, because I still wasn't that familiar with javascript itself, and
          now I had to do this <i>weird</i> useState, useEffect stuff to make my apps work. Spent
          most of my time banging my head against console that said "Too many re-renders. React
          limits the number of renders to prevent an infinite loop", but StackOverflow, React Docs,
          and MDN Web Docs held my hand through those tough times.
        </p>

        <p>
          <i>
            <b>little side-note:</b> I did learn more than just React and Javascript, can't put
            everything here, but if you're interested, reach out to me and I'll be more than glad to
            share.
          </i>
        </p>
        <p>
          Anyway...
          <br />
          It's been 2 years since that, <i>think</i> I have a rough idea of how modern web works
          now.
          <p>
            <i>Thanks for reading through!</i>
          </p>
          You can check out my projects at{" "}
          <a target="_blank" href="https://github.com/datuchela">
            GitHub
          </a>{" "}
          or on the right side (bottom, if you're on mobile) of this article.
          <br />
          <p className="flex flex-col lg:flex-row lg:items-center gap-2">
            You can contact me at
            <div className="flex items-center gap-2">
              <a href="mailto:davit.narimanidze408@gmail.com">davit.narimanidze408@gmail.com</a>
              <button
                onClick={() => navigator.clipboard.writeText("davit.narimanidze408@gmail.com")}
              >
                <CopyIcon fill={isDarkMode ? "#ffffff" : "#000000"} width={20} height={20} />
              </button>
            </div>
          </p>
        </p>
      </article>
      <aside>
        <h2>My recent projects:</h2>
        {isLoading ? "Loading..." : isError ? error.message : <Projects data={repos} />}
      </aside>
    </div>
  );
}
