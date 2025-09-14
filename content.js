const uls = document.querySelectorAll('.code-syntax-wrapper ul');

const buttonHTML = `
<button 
  type="button" 
  class="copy-jsx flex items-center px-3 py-2 text-xs font-medium text-gray-600 bg-gray-100 border-l border-gray-200 dark:border-gray-600 dark:text-gray-400 dark:bg-gray-800 hover:text-blue-700 dark:hover:text-white">
  <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
    <path d="M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2Z"></path>
    <path d="M11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z"></path>
  </svg>
  <span class="copy-text">Copy JSX</span>
</button>
`;

uls.forEach((ul) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = buttonHTML.trim();
  const button = wrapper.firstChild;
  ul.append(button);
});

const buttons = document.querySelectorAll('.copy-jsx');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const wrapper = button.closest('.code-syntax-wrapper');

    if (wrapper) {
      const codeBlock = wrapper.querySelector('pre code');
      if (codeBlock) {
        const html = codeBlock.innerText;

        const JSX = html.replace(/\bclass=/g, 'className=');
        navigator.clipboard.writeText(JSX).then(() => {
          const original = button.textContent;
          button.textContent = 'Copied!';
          setTimeout(() => (button.textContent = original), 2000);
        });
      }
    } else {
    }
  });
});
