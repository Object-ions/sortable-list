const draggableList = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
  'jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page'
];

//Store the list items
const listItems = [];

let dragStartIndex;

createList();

//Insert list items into DOM
function createList() {
  [...richestPeople]
    .map(function (a) {
      return {
        value: a,
        sort: Math.random()
      };
    })
    .sort(function (a, b) {
      return a.sort - b.sort;
    })
    .map(function (a) {
      return a.value;
    })
    .forEach(function (person, index) {
      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true">
      <p class="person-name">${person}</p>
      <i class="fas fa-grip-lines"></i>
    </div>
    `;

      listItems.push(listItem);

      draggableList.appendChild(listItem);
    });

  addEventListeners();
};

function dragStart() {
  console.log('event: ', 'dragstart');
}

function dragEnter() {
  console.log('event: ', 'dragenter');
}

function dragLeave() {
  console.log('event: ', 'dragleave');
}

function dragOver() {
  console.log('event: ', 'dragover');
}

function dragDrop() {
  console.log('event: ', 'dragdrop');
}

function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(function (draggable) {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach(function (item) {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
}