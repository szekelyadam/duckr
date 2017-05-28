export default function auth() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Ádám Székely',
        uid: 'adamszekely',
        avatar: 'https://avatars3.githubusercontent.com/u/7238093?v=3&s=40',
      });
    }, 2000);
  });
}
