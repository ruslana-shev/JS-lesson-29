document.addEventListener('DOMContentLoaded', function () {
  console.clear();
  //DOM-BOM
  //1
	// function isParent(parent, child) {
	// 	var childAll = parent.getElementsByTagName('*');
	// 	for (var i = 0; i < childAll.length; i++) {
	// 		childAll[i] == child ? console.log('Да, первый элемент - родитель для второго') : console.log('Первый элемент - не родитель для второго');
	// 	}
	// }
	// isParent(document.body.children[0], document.querySelector('mark'));
	// isParent(document.querySelector('ul'), document.querySelector('mark'));

	//2
	// var elements = document.getElementsByTagName('a');
	// console.info(elements);
	// for (var i = 0; i < elements.length; i++) {
	// 	elements[i].matches('li > a') ? false : console.log(elements[i]);
	// }

	//3
	// console.info(document.body.children[1].previousElementSibling);
	// console.info(document.body.children[1].nextElementSibling);

	//4
	// console.info(document.querySelectorAll('li').length);

	//DOM nodes
	//Path1
	//1
	// var paragraf = document.querySelector('p');
	// console.info(paragraf.textContent);

	// 2
	// function getInfoDom(dom) {
	// 	this.type = dom.nodeType;
	// 	this.name = dom.nodeName;
	// 	this.children = dom.children.length ? dom.children.length : 0;
	// 	return {
	// 		type: this.type,
	// 		name: this.name,
	// 		children: children
	// 	}
	// }
	// console.info(getInfoDom(paragraf));

	//3
	// var ul = document.querySelectorAll('ul > li');
	// var getTextFromUl = Array.prototype.slice.call(ul);
	// for (var i = 0; i < getTextFromUl.length; i++) {
	// 	getTextFromUl[i] = getTextFromUl[i].textContent;
	// }
	// console.info(getTextFromUl);

	//Path2
	//1
	// var isUl = document.querySelector('ul');
	// isUl.classList.add('list');
	// console.info(isUl);
	
	//2
	// document.querySelector("li > a").id = 'link';
	// console.info(document.querySelector("li > a"));
	
	//3
	// var li = document.querySelectorAll('li');
	// li[0].classList.add('item');
	// li[2].classList.add('item');
	// console.info(document.querySelectorAll('li'));

	//4
	// var a = document.querySelectorAll('a');
	// for (var i = 0; i < a.length; i++) {
	// 	a[i].classList.add('custom-link');
	// }
	// console.info(a);

	//Path3 OOP, ф-ция конструктор в nodes.js
	
	var node = document.querySelector('a');
	node1 = new SuperConstructor(node);
	console.info(node1.getInfoNode());
	node1.append('<p>Some text</p>');
	node1.after('<span>Text text Text</span>');
	node1.prepend('<mark>Mark </mark>');
	node1.before('<p>Paragraf</p>');
	node1.html();
	node1.html('Some text');
	console.info(node1.getElement());

	// // node1.attr('href');
	// // node1.attr('href', 'contacts');
	// // node1.attr();

	// // node1.text();
	// // node1.text('hallo!');

	//Манипуляция содержимым
	//1
	// var ulNode = document.body.children[1];
	// var	liNode = document.createElement('li');

	// 	liNode.className = 'new-item';

	// ulNode.appendChild(liNode);
	// document.body.children[1].lastChild.insertAdjacentHTML('afterbegin', 'item 4');

	// var liNode1 = liNode.cloneNode(true);
	// ulNode.appendChild(liNode1);
	// document.body.children[1].lastChild.textContent = 'item 5';
	// console.log(ulNode);

	//2
	// var parentElement = document.querySelectorAll('li > a');
	// 	for (var i = 0; i < parentElement.length; i++) {
	// 		parentElement[i].insertAdjacentHTML('beforeEnd', '<strong></strong>');
	// 	}
	// console.info(document.querySelector('ul'));

	// //3
	// document.body.insertAdjacentHTML('afterBegin', '<img src="img/planeta-zemlya-kartinka.960x540.jpg", alt ="планета земля"">');
	// console.log(document.body);

	//4
	// document.querySelector('mark').classList.add('green');
	// document.querySelector('mark').insertAdjacentHTML('beforeEnd', ' green');
	// console.log(document.querySelector('mark'));

	//5
	// var li = document.querySelectorAll('li'),
	// li = Array.prototype.slice.call(li),
	// li = li.reverse();
	// for (var i = 0; i < li.length; i++) {
	// 	console.info(li[i].textContent);
	// }
});