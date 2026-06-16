import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
      <header>Main Navigation</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
