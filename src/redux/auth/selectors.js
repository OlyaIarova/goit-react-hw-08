
export const selectIsLoggedIn = state => state.auth.isLoggedIn; // Вибирає значення isLoggedIn зі стану auth

export const selectUser = state => state.auth.user;// Вибирає значення user

export const selectIsRefreshing = state => state.auth.isRefreshing; // Вибирає значення isRefreshing

export const selectError = state => state.auth.error; // Вибирає значення error

export const selectIsLoading = state => state.auth.isLoading; // Вибирає значення isLoading зі стану auth
