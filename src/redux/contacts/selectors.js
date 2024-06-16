export const selectContacts = state => state.contacts.items;// Селектор selectContacts вибирає масив контактів зі стану contacts.

export const selectLoading = state => state.contacts.isLoading; // Селектор selectLoading вибирає прапор isLoading зі стану contacts.

export const selectError = state => state.contacts.error;// Селектор selectError вибирає об'єкт помилки (якщо він є) зі стану contacts.


