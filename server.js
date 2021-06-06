function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Containers rule! updated by Ramin');
    await sleep(5000);
  }
}

main();
