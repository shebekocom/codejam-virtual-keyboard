// eng key lang

const keyboardEng = [
  ['`~', '1!', '2@', '3#', '4$', '5%', '6^', '7&', '8*', '9(', '0)', '-_', '=+', 
  {
    key: 'Backspace',
    name: 'backsp'
  }],
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


// adding to input by click translation

keyBoard.addEventListener('mousedown', () => {
  let element = '';
  if (event.target.className === 'keyboard' || event.target.className === 'row') return;
  if (event.target.tagName === "SPAN") {
    element = event.target.parentElement;
  } else {
    element = event.target;
  }
  element.classList.add('hover');
  textarea.innerHTML += element.innerText;
  console.dir(element.className);
})

document.addEventListener('mouseup', () => {
  const keybutton = document.querySelectorAll('.hover');
  keybutton.forEach((el) => el.classList.remove('hover'));
});
