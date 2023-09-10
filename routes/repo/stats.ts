export default defineCachedEventHandler(
  async (e) => {
    setHeader(e, "Access-Control-Allow-Origin", "*");

    const { stars_count, forks_count } = await $codeberg("/");

    return {
      stars: stars_count,
      forks: forks_count,
    };
  },
  {
    name: "repo-stats",
    maxAge: 60 * 30,
  }
);
