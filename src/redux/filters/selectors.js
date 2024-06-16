import { createSelector } from '@reduxjs/toolkit';
import Fuse from 'fuse.js';
import { selectContacts } from '../contacts/selectors';

export const selectContactsFilter = state => state.filters.name; // приймає об'єкт стану state та повертає значення властивості filter з об'єкта стану.

export const selectVisibleContacts = createSelector(
  //селектор selectVisibleContacts, який залежить від selectContacts та selectContactsFilter.
  // Фільтрація виконується шляхом порівняння імен контактів зі значенням фільтру, без урахування регістру.
  [selectContacts, selectContactsFilter],
  (contacts, filter) => {
    if (filter === '') {
      return contacts;
    }
    const options = {
      keys: ['name', 'number'],
      includeScore: true,
    };
    const fuse = new Fuse(contacts, options);
    return fuse.search(filter).map(contact => contact.item);
  }
);
