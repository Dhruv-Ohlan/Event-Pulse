import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopHeader from './TopHeader';

export default function DashboardLayout() {
  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen flex">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <TopHeader />
        <main className="flex-1 relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
