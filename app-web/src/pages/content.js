import createIntlMessage from '../utils/createIntlMessage';

export const HOMEPAGE = {
  id: id => `digital.home.${id}`,
  title: 'CSI Lab',
  introDescription: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur vulputate maximus. Sed nibh nisi, sagittis in ex non, elementum suscipit turpis. Cras et nulla eros. Vivamus luctus hendrerit justo vitae semper. Donec nisi nunc, cursus nec tortor id, luctus volutpat turpis. Nunc auctor nisi et felis pellentesque molestie. Sed imperdiet dolor dui, non porta leo euismod a. Morbi eget est malesuada, gravida leo sit amet, sodales eros. Vestibulum pretium elementum enim ut mollis. Nam fermentum mattis lectus, id sodales tortor posuere quis.`,
};

export const HOMEPAGE_CONTENT = {
  title: createIntlMessage(HOMEPAGE.id('title'), HOMEPAGE.title, 'The main title for the homepage'),
  introDescription: createIntlMessage(
    HOMEPAGE.id('introDescription'),
    HOMEPAGE.introDescription,
    'Explains what the home page is about',
  ),
};
