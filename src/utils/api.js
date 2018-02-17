/* eslint-env browser */
import demoData from './demo-data';

const LSDATAKEY = 'items';

let items = localStorage.getItem(LSDATAKEY);
try {
  items = JSON.parse(items);
} catch (e) {
  console.log('json parse error');
}
if (!Array.isArray(items)) {
  items = demoData;
}
items = items.map((item) => ({
  ...item,
  date: item.date instanceof Date ? item.date : new Date(item.date),
}));

function saveItems() {
  localStorage.setItem(LSDATAKEY, JSON.stringify(items));
}

export const getItems = () =>
  new Promise((resolve) => setTimeout(resolve, 1000, [...items]));

export const addItem = (item) => {
  const newItem = {
    id: Date.now(),
    title: 'Default title',
    description: '',
    priority: 1,
    date: new Date(),
    done: false,
    ...item,
  };
  items = [...items, newItem];
  saveItems();
  return new Promise((resolve) => setTimeout(resolve, 1000, newItem));
};
