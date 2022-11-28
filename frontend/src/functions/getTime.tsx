export function getTime() {
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes();
  return time;
}
