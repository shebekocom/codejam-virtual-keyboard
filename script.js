// eng key lang

const keyboardEng = [
  ['`~', '1!', '2@', '3#', '4$', '5%', '6^', '7&', '8*', '9(', '0)', '-_', '=+',
    {
      key: 'Backspace',
      name: 'backsp'
    }
  ],
  [{
    key: 'Tab',
    name: 'tab'
  }, 'qQ', 'wW', 'eE', 'rR', 'tT', 'yY', 'uU', 'iI', 'oO', 'pP', '[{', ']}', '\/|'],
  [{
    key: 'CapsLock',
    name: 'caps'
  }, 'aA', 'sS', 'dD', 'fF', 'gG', 'hH', 'jJ', 'kK', 'lL', ';:', "'\"", {
    key: 'Enter',
    name: 'enter'
  }],
  [{
    key: 'Shift',
    name: 'shift'
  }, 'zZ', 'xX', 'cC', 'vV', 'bB', 'nN', 'mM', ',<', '.>', '/?', {
    key: 'Shift',
    name: 'shift'
  }],
  [{
    key: 'Control',
    name: 'ctrl'
  }, {
    key: 'F1',
    name: 'fn'
  }, {
    key: 'Alt',
    name: 'alt'
  }, {
    key: ' ',
    name: 'space'
  }, {
    key: 'Alt',
    name: 'alt'
  }, {
    key: 'F1',
    name: 'fn'
  }, {
    key: 'Control',
    name: 'ctrl'
  }]
];

// rus key lang

const keyboardRus = [
  ['ёЁ', '1!', '2"', '3№', '4;', '5%', '6:', '7?', '8*', '9(', '0)', '-_', '=+', 'backsp'],
  ['tab', 'йЙ', 'цЦ', 'уУ', 'кК', 'еЕ', 'нН', 'гГ', 'шШ', 'щЩ', 'зЗ', 'хХ', 'ъЪ', '\//'],
  ['caps', 'фФ', 'ыЫ', 'вВ', 'аА', 'пП', 'рР', 'оО', 'лЛ', 'дД', 'жЖ', "эЭ", 'enter'],
  ['shift', 'яЯ', 'чЧ', 'сС', 'мМ', 'иИ', 'тТ', 'ьЬ', 'бБ', 'юЮ', '.,', 'shift'],
  ['ctrl', 'fun', 'alt', 'space', 'alt', 'fun', 'ctrl']
];

let keyboard = keyboardEng;
const div = document.createElement('div');
const textarea = document.createElement('textarea');
const keyBoard = document.createElement('div');

div.className = 'wrapper';
keyBoard.className = 'keyboard';
textarea.className = 'textarea';

document.body.appendChild(div);
div.append(textarea);
div.append(keyBoard);

// add rows on keyboard
for (let j = 0; j < keyboard.length; j++) {

  const divRow = document.createElement('div');
  divRow.className = 'row';

  // add keybutons on keyboard in row
  for (let i = 0; i < keyboard[j].length; i++) {
    const divButton = document.createElement('div');
    divButton.className = 'keybutton';

    // change style for keyButtons
    switch (keyboard[j][i].name) {
      case 'backsp':
        divButton.className += ' backsp';
        break;
      case 'tab':
        divButton.className += ' tab';
        break;
      case 'caps':
        divButton.className += ' caps';
        break;
      case 'enter':
        divButton.className += ' enter';
        break;
      case 'shift':
        divButton.className += ' shift';
        break;
      case 'ctrl':
        divButton.className += ' ctrl';
        break;
      case 'fun':
        divButton.className += ' fun';
        break;
      case 'alt':
        divButton.className += ' alt';
        break;
      case 'space':
        divButton.className += ' space';
        break;
    }

    // add on HTML document text on buttons
    if (keyboard[j][i].length <= 2) {
      divButton.innerHTML += `<span class="text" data-key="${keyboard[j][i][0]}">${keyboard[j][i][0]}</span><span class="textup" data-key="${keyboard[j][i][1]}">${keyboard[j][i][1]}</span>`;
    } else {
      divButton.innerHTML += `<span class="functionButton" data-key="${keyboard[j][i].key}">${keyboard[j][i].name}</span>`;
    }
    divRow.append(divButton);
  }
  keyBoard.append(divRow);
}


// hover buttons on virtual keybord
textarea.addEventListener('keydown', () => {
  const element = document.querySelector('[data-key="' + event.key + '"]');
  element.parentElement.classList.add('hover');
});

textarea.addEventListener('keyup', () => {
  const element = document.querySelector('[data-key="' + event.key + '"]');
  element.parentElement.classList.remove('hover');
});

document.addEventListener('keydown', function (event) {
  let text = document.querySelectorAll('.text');
  let textUp = document.querySelectorAll('.textup');
  let caps = event.getModifierState && event.getModifierState('CapsLock');
  console.log(caps);

  if (caps) {
    text.forEach((el) => el.style.display = 'none');
    textUp.forEach((el) => el.style.display = 'inline');
  } else {
    text.forEach((el) => el.style.display = 'inline');
    textUp.forEach((el) => el.style.display = 'none');
  }
});

const capslook = document.querySelector('.keybutton.caps');
capslook.addEventListener('mousedown', function (event) {
  let text = document.querySelectorAll('.text');
  let textUp = document.querySelectorAll('.textup');
  let caps = event.getModifierState && event.getModifierState('CapsLock');

  if (caps) {
    text.forEach((el) => el.style.display = 'none');
    textUp.forEach((el) => el.style.display = 'inline');
  } else {
    text.forEach((el) => el.style.display = 'inline');
    textUp.forEach((el) => el.style.display = 'none');
  }
});



// adding to input by click translation
let text = document.querySelectorAll('.text');
let textUp = document.querySelectorAll('.textup');

keyBoard.addEventListener('mousedown', () => {
  let element = '';
  if (event.target.className === 'keyboard' || event.target.className === 'row') return;
  if (event.target.tagName === "SPAN") {
    element = event.target.parentElement;
  } else {
    element = event.target;
  }
  if (element.className === 'keybutton space') {
    textarea.value += ' ';
  } else if (element.className === 'keybutton backsp') {
    textarea.value = textarea.value.slice(0, -1);
  } else if (element.className === 'keybutton shift') {
    text.forEach((el) => el.style.display = 'none');
    textUp.forEach((el) => el.style.display = 'inline');
  } else if (element.className === 'keybutton caps' || element.className === 'keybutton alt' || element.className === 'keybutton ctrl' || element.className === 'keybutton tab') {
    textarea.value += '';
  } else {
    textarea.value += element.innerText;
  }
  element.classList.add('hover');
});

// if mouse click off

document.addEventListener('mouseup', () => {
  let element = '';
  const keybutton = document.querySelectorAll('.hover');
  keybutton.forEach((el) => el.classList.remove('hover'));

  if (event.target.className === 'keyboard' || event.target.className === 'row') return;
  if (event.target.tagName === "SPAN") {
    element = event.target.parentElement;
  } else {
    element = event.target;
  }

  if (element.className === 'keybutton shift') {
    text.forEach((el) => el.style.display = 'inline');
    textUp.forEach((el) => el.style.display = 'none');
  }

});

textarea.addEventListener('keydown', function (event) {
  if (event.key != 'Shift') return;
  let shift = event.getModifierState && event.getModifierState('Shift');
  console.log(shift);
  text.forEach((el) => el.style.display = 'none');
  textUp.forEach((el) => el.style.display = 'inline');
});

textarea.addEventListener('keyup', function (event) {
  if (event.key != 'Shift') return;
  let shift = event.getModifierState && event.getModifierState('Shift');
  console.log(shift);
  text.forEach((el) => el.style.display = 'inline');
  textUp.forEach((el) => el.style.display = 'none');
});