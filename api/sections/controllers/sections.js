"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    // let entities;

    const entities = await strapi.services.sections.find(ctx.query);

    return entities.map((entity) => ({
      columns: entity.column,
      locale: entity.locale,
      id: entity.id,
    }));
  },
};
