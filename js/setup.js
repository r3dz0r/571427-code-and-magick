'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var COLOR_BLACK = '#000';
var COLOR_RED = '#f00';
var COLOR_BLUE = '#00f';
var COLOR_YELLOW = '#ff0';
var COLOR_GREEN = '#0f0';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристов', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['Да марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = [COLOR_BLACK, COLOR_RED, COLOR_BLUE, COLOR_YELLOW, COLOR_GREEN];
var wizards = [
  {
    name: WIZARD_NAMES[0],
    surname: WIZARD_SURNAMES[0],
    coatColor: COAT_COLOR[0],
    eyesColor: EYES_COLOR[0]
  },
  {
    name: WIZARD_NAMES[1],
    surname: WIZARD_SURNAMES[1],
    coatColor: COAT_COLOR[1],
    eyesColor: EYES_COLOR[1]
  },
  {
    name: WIZARD_NAMES[2],
    surname: WIZARD_SURNAMES[2],
    coatColor: COAT_COLOR[2],
    eyesColor: EYES_COLOR[2]
  },
  {
    name: WIZARD_NAMES[3],
    surname: WIZARD_SURNAMES[3],
    coatColor: COAT_COLOR[3],
    eyesColor: EYES_COLOR[3]
  },
  {
    name: WIZARD_NAMES[4],
    surname: WIZARD_SURNAMES[4],
    coatColor: COAT_COLOR[4],
    eyesColor: EYES_COLOR[4]
  },
  {
    name: WIZARD_NAMES[5],
    surname: WIZARD_SURNAMES[5],
    coatColor: COAT_COLOR[5],
    eyesColor: EYES_COLOR[5]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
