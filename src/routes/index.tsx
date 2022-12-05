import { useQuery } from "@tanstack/react-query";
import Projects from "../components/Projects";

const fetchRepos = async () => {
  const res = await fetch("https://api.github.com/users/datuchela/repos", {
    headers: {
      // "Authorization": `Bearer ${}`
    },
  });
  const data = await res.json();
  if (res.status !== 200) throw Error(data.message);
  return data;
};

export default function Index() {
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
          It's been 2 years since that, <i>think</i> I learned how modern web works now. I'm not
          sure, check out my projects and decide yourself whether that's true or not.
        </p>
        <p>Thanks for reading through!</p>
      </article>
      <article>
        <h2>My recent projects:</h2>
        {isLoading ? "Loading..." : isError ? error.message : <Projects data={repos} />}
      </article>
    </div>
  );
}
