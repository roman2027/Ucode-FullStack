class Timer {
  time;
  constructor(title, delay, stopCount) {
    this.title = title,
      this.delay = delay,
      this.stopCount = stopCount,
      this.start()
  }
  start() {
    console.log(`Timer ${this.title} started (delay = ${this.delay}, stopCount = ${this.stopCount})`)
    this.time = setInterval(() => {
      this.tick();
    }, this.delay)
  }
  tick() {
    this.stopCount--;
    console.log(`Timer ${this.title} Tick! | cyclees left ${this.stopCount}`);
    if (this.stopCount == 0) {
    this.stop()
  }
  };
  stop() {
      clearInterval(this.time);
      console.log(`Timer ${this.title} stopped`);
  }
}
  
function runTimer(id, delay, counter) {
  new Timer(id, delay, counter);
}
runTimer('Bleep', 1000, 5);