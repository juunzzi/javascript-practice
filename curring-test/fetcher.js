function fetcher(api_url, path, option) {
  console.log(api_url);
  console.log(path);
  console.log(option);
}
function curry(func) {
  return function helper(...saveArgs) {
    const { length: argsLength } = func;
    if (saveArgs.length < argsLength) {
      // 피가.. 아니 인자가 부족해..
      return function (...args) {
        return helper(...saveArgs.concat(args.length ? args : undefined));
      };
    }
    // 모든게 완벽하니 진짜 함수를 내어줌
    return func(...saveArgs);
  };
}

const curriedFetcher = curry(fetcher);

const juunzziServerFetcher = curriedFetcher("juunzzi_server");

juunzziServerFetcher("/getPosts")();
