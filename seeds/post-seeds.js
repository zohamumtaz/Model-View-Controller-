const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
     post_content:'Donec posuere metus vitae ipsum.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_content:'Donec posuere metus vitae ipsum.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_content:'Donec posuere metus vitae ipsum.',

    user_id: 8
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

    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content:'Donec posuere metus vitae ipsum.',

    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_content:'Donec posuere metus vitae ipsum.',

    user_id: 4
  },
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
