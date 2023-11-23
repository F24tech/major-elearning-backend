'use strict';

/**
 * course controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::course.course', ({ strapi }) => ({
    async getAllCourses(ctx) {

        try {
            // Use the correct model names in the strapi.query and populate methods
            const categories = await strapi.db.query('api::categorie.categorie').findMany({ where: { is_active: true }, populate: ['courses', 'courses.thumbnail'] })

            const sanitizeEntity = await this.sanitizeOutput(categories, ctx)
            return sanitizeEntity;
        } catch (error) {
            // Log and handle any errors
            console.error('Error fetching courses:', error);
            ctx.throw(500, 'Internal Server Error');
        }

    }
}));
