const projectList = [
  {
    id: 1,
    name: "petLog",
    technologies: "React.js, Node + Express.js, Prisma + MySQL",
    status: "ongoing",
    repositories: [
      {
        repoName: "petlog-client",
        url: "https://github.com/datuchela/petlog-client.git",
      },
      {
        repoName: "petlog-server",
        url: "https://github.com/datuchela/petlog-server.git",
      },
    ],
  },
  {
    id: 2,
    name: "driveuchela",
    status: "finished",
    technologies: "Node + Express.js, EJS, MongoDB",
    repositories: [
      {
        repoName: "driveuchela",
        url: "https://github.com/datuchela/driveuchela.git",
      },
    ],
  },
  {
    id: 3,
    name: "boarduchela",
    technologies: "Next.js, Socket.io",
    status: "finished",
    repositories: [
      {
        repoName: "boarduchela",
        url: "https://github.com/datuchela/boarduchela.git",
      },
    ],
  },
];

export default projectList;
