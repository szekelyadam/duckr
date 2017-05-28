export default function auth() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Ádám Székely',
        avatar: 'https://avatars3.githubusercontent.com/u/7238093?v=3&s=40',
        uid: 'adamszekely',
      });
    }, 2000);
  });
}
