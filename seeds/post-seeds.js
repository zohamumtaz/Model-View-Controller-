const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Nunc purus.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Pellentesque eget nunc.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Duis ac nibh.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Donec dapibus.',
    post_content:'Donec posuere metus vitae ipsum.',

    user_id: 3
  },
  {
    title: 'Nulla tellus.',
    post_content:'Donec posuere metus vitae ipsum.',

    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_content:'Donec posuere metus vitae ipsum.',

    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
      post_content:'Donec posuere metus vitae ipsum.',

    user_id: 3
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content:'Donec posuere metus vitae ipsum.',

    user_id: 3
  },
  {
    title: 'Etiam justo.',
    post_content:'Donec posuere metus vitae ipsum.',

    user_id: 3
  },
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
