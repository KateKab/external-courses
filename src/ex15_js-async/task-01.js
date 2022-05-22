function fetch(url, options) {
  const method = options.method || '';
  const headers = options.headers || {};
  const body = options.body;
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.keys(headers).forEach((e) => {
    xhr.setRequestHeader(e, headers[e]);
  });

  xhr.send(body);

  xhr.onload = function () {
    if (xhr.status !== 200) {
      console.log(`Ошибка: ${xhr.status}`);
    }
  };

  xhr.onprogress = function (event) {
    console.log(`Загружено ${event.loaded} из ${event.total}`);
  };

  return xhr.response;
}

fetch();
