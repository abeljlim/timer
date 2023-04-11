const args = process.argv.slice(2);
const delays = args;

for (let i = 0; i < delays.length; i++) {
  if(delays[i] < 0) {
    continue;
  }
  if(isNaN(delays[i])) {
    continue;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, delays[i] * 1000);
}