import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import 'material-design-icons/iconfont/material-icons.css';
import '@pnotify/core/dist/Material.css';

import { defaults } from '@pnotify/core';

defaults.delay = 2000;

const { alert, notice, success, error } = require('@pnotify/core');

defaults.styling = 'material';
defaults.icons = 'material';

function noticeNotification() {
  notice({
    title: 'Приветик!',
    text: ' Ну что, ищем котиков или что то другое? :)',
    delay: 3000,
  });
}

function emptyNotification() {
  alert('Какой запрос такой и ответ:)');
}

function errorNotification() {
  error('Такого в нашей галерее нет, к сожалению :)');
}

function succsessNotification() {
  success('Вот тебе картинки наилучшего качества, enjoy!');
}

export default {
  succsessNotification,
  errorNotification,
  noticeNotification,
  emptyNotification,
};
