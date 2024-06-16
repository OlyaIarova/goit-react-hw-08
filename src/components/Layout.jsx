import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from './AppBar/AppBar';

// Компонент Layout відповідає за загальну структуру сторінки
const Layout = () => {
  return (
    <div>
      <AppBar />
      {/*Виводимо компонент AppBar, який містить навігаційну панель */}
      <Suspense fallback={null}>
        <Outlet />
        {/* Виводимо дочірній компонент Outlet, який буде містити відповідний компонент в залежності від поточного шляху */}
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Layout;
