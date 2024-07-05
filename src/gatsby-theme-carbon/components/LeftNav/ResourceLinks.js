import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Cúram Documentation',
    href: 'https://curam-spm-devops.github.io/wh-support-docs/spm/pdf-documentation/',
  },
  {
    title: 'Github',
    href: 'https://github.com/merative/curam-performance-tuning',
  },
  {
    title: 'Change Log',
    href: 'https://github.com/merative/curam-performance-tuning/blob/main/CHANGELOG.md',
  }
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
