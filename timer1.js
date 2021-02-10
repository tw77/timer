let args = process.argv;

args = args.slice(2).sort();

for (const arg of args) {
  if ((arg) && (arg > 0)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, arg * 1000);
  }
}