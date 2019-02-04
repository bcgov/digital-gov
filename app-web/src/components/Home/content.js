import createIntlMessage from '../../utils/createIntlMessage';

export const HOMEPAGE = {
  id: id => `digital.home.${id}`,
  SIDE: {
    title: 'With a digital mindset and methods we can',
    list: [
      'Deliver better services to citizens',
      'Make better decisions about polices',
      'Achieve better value from our investments',
    ],
  },
  MAIN: {
    title:
      'The Continuous Service Improvement (CSI) lab is a space where we are learning to be digital',
    p1: `A CSI Lab residency is for Leaders who want to offer exemplary service, optimize tax dollars, and build high performing modern organizations: 
    The CSI lab creates and accelerates high performing teams that rapidly engage people, design, make, and ship service improvements using modern methods.`,
    p2: `Unlike team retreats, courses, and consultant reports, The CSI lab invests heavily in learning
    by doing, with the support of Agile methods, service design, modern technology, and community.`,
  },
};

export const HOMEPAGE_CONTENT = {
  SIDE: {
    title: createIntlMessage(
      HOMEPAGE.id('side.title'),
      HOMEPAGE.SIDE.title,
      'title for the side panel',
    ),
    list: HOMEPAGE.SIDE.list.map(l => createIntlMessage(null, l, 'A list item')),
  },
  MAIN: {
    title: createIntlMessage(
      HOMEPAGE.id('main.title'),
      HOMEPAGE.MAIN.title,
      'title for the main content',
    ),
    p1: createIntlMessage(
      HOMEPAGE.id('main.p1'),
      HOMEPAGE.MAIN.p1,
      'paragraph for the main content',
    ),
    p2: createIntlMessage(
      HOMEPAGE.id('main.p2'),
      HOMEPAGE.MAIN.p2,
      'paragraph for the main content',
    ),
  },
};
