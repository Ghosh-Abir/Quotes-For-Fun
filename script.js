async function getQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  return { quote: data.content, author: data.author };
}

document.querySelector('.nxt').addEventListener('click', async () => {
  const { quote, author } = await getQuote();
  const quoteText = document.querySelectorAll('.quoteText');
  const authortxt = document.querySelectorAll('.author');
  quoteText.forEach((element) => {
    element.innerHTML=" ";
  });
  quoteText.forEach((element) => {
    element.insertAdjacentHTML('beforeend', '<span class="qlogo">&#10077;</span> ' + quote);
  });
  authortxt.forEach((element) => {
    element.innerHTML=" ";
  });
  authortxt.forEach((element) => {
    element.insertAdjacentHTML('beforeend', '<span class="alogo">&#126;</span>'+ author);
  });

  console.log(`"${quote}" - ${author}`);
});