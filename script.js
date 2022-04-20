const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redPara = document.createElement('p');
redPara.classList.add('red-para');
redPara.textContent = "Hey I'm red!";
redPara.style.color = "red";

container.appendChild(redPara);

const blueAychThree = document.createElement('h3');
blueAychThree.classList.add('blue-aych-three');
blueAychThree.textContent = "I'm a blue H3!";
blueAychThree.style.color = "blue";

container.appendChild(blueAychThree);

const newDiv = document.createElement('div');
newDiv.classList.add('new-div');

const aychOne = document.createElement('h1');
aychOne.classList.add('aych-one');
aychOne.textContent = "I'm in a div!";

newDiv.appendChild(aychOne);

const newPara = document.createElement('p');
newPara.classList.add('new-para');
newPara.textContent = 'Me too!';

newDiv.appendChild(newPara);

container.appendChild(newDiv)
