module.exports = {
  async find(ctx) {
    const { id, locale, socialLink, contact, copyright } =
      await strapi.services.footer.find(ctx.query);

    const links = socialLink.map((l) => ({
      brand: l.socialNetwork,
      url: l.url,
      id: l.id,
    }));

    return {
      id,
      locale,
      contact,
      copyright,
      socialLinks: links,
    };
  },
};
