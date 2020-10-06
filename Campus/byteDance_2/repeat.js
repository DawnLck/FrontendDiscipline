function repeat(func, times, wait) {
  return message => {
    let timer = setInterval(() => {
      times-- > 0 ? func(message) : clearInterval(timer);
    }, wait);
  };
}
const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc("hellworld");
//会alert4次 helloworld，每次间隔3秒
