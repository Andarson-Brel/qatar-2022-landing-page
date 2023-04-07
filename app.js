const countDown = () => {
  const openingDay = new Date("November 20, 2023, 00:00:00").getTime();
  const currentDate = new Date().getTime();
  const gap = openingDay - currentDate;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.trunc(gap / day);
  const textHour = Math.trunc((gap % day) / hour);
  const textMinute = Math.trunc((gap % hour) / minute);
  const textSecond = Math.trunc((gap % minute) / second);

  document.querySelector(".days").textContent = textDay;
  document.querySelector(".hours").textContent = textHour;
  document.querySelector(".minutes").textContent = textMinute;
  document.querySelector(".seconds").textContent = textSecond;
};
setInterval(countDown, 1000);
