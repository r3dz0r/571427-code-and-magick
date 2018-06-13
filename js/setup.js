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
var wizards = [];

var getRandomIndex = function (length) {
  return Math.floor(Math.random() * length);
};

for (var index = 0; index < 4; index++) {
  var wizardModel = {
    name: WIZARD_NAMES[getRandomIndex(WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SURNAMES[getRandomIndex(WIZARD_SURNAMES.length - 1)],
    coatColor: COAT_COLOR[getRandomIndex(COAT_COLOR.length - 1)],
    eyesColor: EYES_COLOR[getRandomIndex(EYES_COLOR.length - 1)]
  };

  wizards.push(wizardModel);
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
