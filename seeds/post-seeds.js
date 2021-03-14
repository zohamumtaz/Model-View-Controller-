const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Nunc purus.',
    content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Pellentesque eget nunc.',
    content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Duis ac nibh.',
    content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Donec dapibus.',
    content:'Donec posuere metus vitae ipsum.',

    user_id: 3
  },
  {
    title: 'Nulla tellus.',
    content:'Donec posuere metus vitae ipsum.',

    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    content:'Donec posuere metus vitae ipsum.',

    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
      content:'Donec posuere metus vitae ipsum.',

    user_id: 3
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content:'Donec posuere metus vitae ipsum.',

    user_id: 3
  },
  {
    title: 'Etiam justo.',
    content:'Donec posuere metus vitae ipsum.',

    user_id: 3
  },
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
