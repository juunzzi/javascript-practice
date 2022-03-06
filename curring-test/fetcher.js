function fetcher(api_url, path, option) {
  // 기본값의 초기화를 함수 내부에서 수행한다.
  option = option || {};

  // const data = await fetch(`${api_url}/${path}`, option);

  // if (data.statusText === "OK") {
  //   return data.json();
  // }

  // throw new Error("error");

  console.log(api_url);
  console.log(path);
  console.log(option);
}
function curry(func) {
  let parameters = [];
  return function helper(...args) {
    parameters = parameters.concat(args.length ? args : undefined);

    const { length: argsLength } = func;

    if (parameters.length < argsLength) {
      return helper;
    }

    const tempParameters = parameters;
    //cache clear
    parameters = [];
    return func(...tempParameters);
  };
}

const curriedFetcher = curry(fetcher);

// option 만 바꿔서 사용할 수 있는 fetcher가 탄생
const juunzziServerToGetCommentsFetcher =
  curriedFetcher("juunzzi_server")("/getComments");

juunzziServerToGetCommentsFetcher({});

const juunzziServerFetcher = curriedFetcher("juunzzi_server");

juunzziServerFetcher("/getPosts")();
