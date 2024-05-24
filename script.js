const profile = {
  name: "Jacobe Gluke",
  tag: "Jgluke",
  location: "Ocho Rios,  Jamaica",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  avatar,
  stats: { followers, views, likes },
} = profile;

console.log(name, tag, avatar, followers, views, likes);
