class Counter {
  constructor(target, { start, end, duration }) {
    this.target = target;
    this.start = start || 0;
    this.end = end || 100;
    this.totalCount = this.end - this.start;
    this.duration = duration || 2000;
    this.totalFrames = (this.duration / 1000) * 60;
    this.step = 1;
    this.delay = 0;

    if (this.totalCount > this.totalFrames) {
      // if frameCount is less than the total count size, we need to increase the step size
      this.step = Math.ceil(this.totalCount / this.totalFrames);
    } else {
      // if frameCount is greater than the total count then we need to increase the duration
      // in other words slow down our count
      // default delay between frames is around 16 17 to if our delay is under 20 make it 0;
      this.delay = Math.floor(this.duration / this.totalCount) - 20;
    }

    this._count = this._count.bind(this);
  }

  init() {
    this.then = Date.now();
    this._count();
  }

  _count() {
    this.x++;
    this.counterId = requestAnimationFrame(this._count);
    const elapsed = Date.now() - this.then;

    if (elapsed >= this.delay) {
      this.then = Date.now();

      if (this.start < this.end) {
        this.start += this.step;
        this.target.textContent = this.start;
      } else {
        this.target.textContent = this.end;
        cancelAnimationFrame(this.counterId);
      }
    }
  }
}

export default Counter;
