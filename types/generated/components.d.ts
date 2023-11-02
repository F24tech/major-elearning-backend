import type { Schema, Attribute } from '@strapi/strapi';

export interface CarousalCarousal extends Schema.Component {
  collectionName: 'components_carousal_carousals';
  info: {
    displayName: 'Carousal';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SectionCourse extends Schema.Component {
  collectionName: 'components_section_courses';
  info: {
    displayName: 'Course';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    preview: Attribute.Boolean;
    sections: Attribute.Component<'section.videos', true>;
  };
}

export interface SectionVideos extends Schema.Component {
  collectionName: 'components_section_videos';
  info: {
    displayName: 'videos';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    video_url: Attribute.String;
    short_desc: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'carousal.carousal': CarousalCarousal;
      'section.course': SectionCourse;
      'section.videos': SectionVideos;
    }
  }
}
