import Counter from './Counter.js';
const counts = document.querySelectorAll('.count');

for (let i = 0; i < counts.length; i++) {
  if (i === 0) new Counter(counts[0], { end: 100 }).init();
  if (i === 1) new Counter(counts[1], { end: 100 }).init();
  if (i === 2) new Counter(counts[2], { end: 1010 }).init();
  if (i === 3) new Counter(counts[3], { end: 757 }).init();
}
