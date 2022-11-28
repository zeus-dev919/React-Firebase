import { number } from "yup/lib/locale";

export function compareWithCurrentTime(
  currentTime: String,
  compareTime: String
) {
  let currentTimeHour = parseInt(currentTime.split(":")[0]) ;
  let currentTimeMin = parseInt(currentTime.split(":")[1]);
  let compareTimeHour = parseInt(compareTime.split(":")[0]);
  let compareTimeMin = parseInt(compareTime.split(":")[1]);
  let value = false;
  currentTimeHour > compareTimeHour
    ? (value = false)
    : currentTimeHour == compareTimeHour
    ? currentTimeMin > compareTimeMin
      ? (value = false)
      : (value = true)
    : (value = true);

  return value;
}
