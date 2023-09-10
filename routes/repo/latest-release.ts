export default defineCachedEventHandler(
  async (e) => {
    setHeader(e, "Access-Control-Allow-Origin", "*");

    const { tag_name, html_url } = await $codeberg("/releases/latest");

    return {
      name: tag_name,
      url: html_url,
    };
  },
  {
    name: "repo-last-release",
    maxAge: 60 * 30,
  }
);
