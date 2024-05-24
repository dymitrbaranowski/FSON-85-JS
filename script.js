// const profile = {
//   name: "Jacobe Gluke",
//   tag: "Jgluke",
//   location: "Ocho Rios,  Jamaica",
//   avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   avatar,
//   stats: { followers, views, likes },
// } = profile;

// console.log(name, tag, avatar, followers, views, likes);

// const rgb = [255, 100, 80];

// const [red, , blue] = rgb;

// console.log(red, blue);

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// const entries = Object.entries(authors);

// // console.log(entries);

// for (const entry of entries) {
//   const [name, rating] = entry;
//   // const name = entry[0];
//   // const rating = entry[1];

//   console.log(name, rating);
// }

// console.log(Math.max(...rating));

// const profile = {
//   name: "Jacobe Gluke",
//   tag: "Jgluke",
//   loction: "Oeojg",
//   avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, loction, ...restProps } = profile;

// // const restProps = {
// //   avatar: profile.avatar,
// //   stats: profile.stats,
// // };

// console.log(name, tag, loction);
// console.log(restProps);
// console.log(profile);

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swiming", "music", "sci-fi"],
};

const location = user.location;
console.log(location);
