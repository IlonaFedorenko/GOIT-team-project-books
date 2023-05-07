import fonds from "./array-of-funds"

const supportList = document.querySelector('.support-ukraine-list');

function aaa(fonds) {
  fonds.forEach(function (fond, index) {
    const { title, url, img, img2x } = fond;
    const params = {};
    params.title = title;
    params.url = url;
    params.img = img;
    params.img2x = img2x;
    params.index = index;

    supportList.insertAdjacentHTML('beforeend', markup(params));
  });
}

function markup(params) {
  const { title, url, img, img2x, index } = params;
  return `<li class="list-unit">
	<a href="${url}" class="list-unit-link"><span class="span-list-unit">${pad(
    index + 1
  )}</span>
	`;
}
aaa(fonds);

function pad(value) {
  return String(value).padStart(2, '0');
}
