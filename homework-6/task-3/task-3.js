const main = document.createElement('main');
main.setAttribute('class', 'mainClass check item');
document.body.append(main);

const myDiv = document.createElement('div');
myDiv.setAttribute('id', 'myDiv');
main.appendChild(myDiv);

const paragraph = document.createElement('p');
paragraph.innerHTML = 'First paragraph';
myDiv.appendChild(paragraph);
