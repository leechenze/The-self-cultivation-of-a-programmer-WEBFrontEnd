function fb(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  return fb(n - 1) + fb(n - 2);
}
console.time("FB执行时间");
var result = fb(43);
console.timeEnd("FB执行时间");
self.postMessage("thirdWorker FB执行完成");
