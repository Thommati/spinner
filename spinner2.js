const animateFrames = frames => {
  let delay = 100;
  for (const frame of frames) {
    setTimeout(() => {
      process.stdout.write(`\r${frame}    `);
    }, delay);
    delay += 100;
  }
};

animateFrames(['|', '/', '-', '\\', '|', '/', '-', '\\', '|']);
