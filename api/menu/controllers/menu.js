module.exports = {
  async find(ctx) {
    const { id, locale, link, logo } = await strapi.services.menu.find(
      ctx.query
    );

    const links = link.map((l) => ({
      id: l.id,
      label: l.label,
      url: l.url,
    }));

    return {
      id,
      locale,
      links,
      logo: {
        id: logo.id,
        name: logo.name,
        alt: logo.alternativeText,
        title: logo.caption,
        mime: logo.mime,
        url: logo.url,
      },
    };
  },
};
