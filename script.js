// eng key lang

const keyboardEng = [
  ['`~', '1!', '2@', '3#', '4$', '5%', '6^', '7&', '8*', '9(', '0)', '-_', '=+', 'backsp'],
  ['tab', 'qQ', 'wW', 'eE', 'rR', 'tT', 'yY', 'uU', 'iI', 'oO', 'pP', '[{', ']}', '\/|'],
  ['caps', 'aA', 'sS', 'dD', 'fF', 'gG', 'hH', 'jJ', 'kK', 'lL', ';:', "'\"", 'enter'],
  ['shift', 'zZ', 'xX', 'cC', 'vV', 'bB', 'nN', 'mM', ',<', '.>', '/?', 'shift'],
  ['ctrl', 'fun', 'alt', 'space', 'alt', 'fun', 'ctrl']
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
    switch (keyboard[j][i]) {
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
      divButton.innerHTML += `<span class="text">${keyboard[j][i][0]}</span><span class="textup">${keyboard[j][i][1]}</span>`;
    } else {
      divButton.innerHTML += `<span class="functionButton">${keyboard[j][i]}</span>`;
    }
    divRow.append(divButton);
  }
  keyBoard.append(divRow);
}