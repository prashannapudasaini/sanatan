import React, { useEffect } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { LayoutDashboard, Newspaper, Image, LogOut, FileText, Users } from 'lucide-react';

const AdminLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('sdb_token');
    if (!token) {
      navigate('/admin/login'); // Redirect to login if no token
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('sdb_token');
    navigate('/admin/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-textMain text-white flex flex-col">
        <div className="p-4 text-center border-b border-gray-700">
          <h2 className="text-xl font-bold text-primary">SDB Admin</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/admin/dashboard" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg transition"><LayoutDashboard size={20}/> Dashboard</Link>
          <Link to="/admin/news" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg transition"><Newspaper size={20}/> Manage News</Link>
          <Link to="/admin/library" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg transition"><FileText size={20}/> Digital Library</Link>
          <Link to="/admin/memberships" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg transition"><Users size={20}/> Memberships</Link>
          <Link to="/admin/gallery" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg transition"><Image size={20}/> Gallery</Link>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button onClick={handleLogout} className="flex items-center gap-3 p-3 w-full text-left text-red-400 hover:bg-gray-800 rounded-lg transition">
            <LogOut size={20}/> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet /> {/* Renders the active admin page here */}
      </main>
    </div>
  );
};

export default AdminLayout;