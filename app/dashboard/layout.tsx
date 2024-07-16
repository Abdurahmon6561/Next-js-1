"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const router = useRouter();

  const handleHome = () => {
    router.push('/dashboard');
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-12">
            <div className="flex flex-col">
              <Link href="/dashboard/products" className="transition-colors duration-300 hover:text-gray-200 hover:underline">Products</Link>
              <Link href="/dashboard/products/55" className="ml-4 transition-colors duration-300 hover:text-yellow-300 hover:underline text-yellow-300">Products by ID</Link>
            </div>
            <div className="flex flex-col">
              <Link href="/dashboard/categories" className="transition-colors duration-300 hover:text-gray-200 hover:underline">Categories</Link>
              <Link href="/dashboard/categories/22" className="ml-4 transition-colors duration-300 hover:text-yellow-300 hover:underline text-yellow-300">Categories by ID</Link>
            </div>
            <div className="flex flex-col">
              <Link href="/dashboard/blog" className="transition-colors duration-300 hover:text-gray-200 hover:underline">Blog</Link>
              <Link href="/dashboard/blog/99" className="ml-4 transition-colors duration-300 hover:text-yellow-300 hover:underline text-yellow-300">Blog by ID</Link>
            </div>
            <div className="flex flex-col">
              <Link href="/dashboard/news" className="transition-colors duration-300 hover:text-gray-200 hover:underline">News</Link>
              <Link href="/dashboard/news/100" className="ml-4 transition-colors duration-300 hover:text-yellow-300 hover:underline text-yellow-300">News by ID</Link>
            </div>
          </div>
          <button 
            onClick={handleHome} 
            className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800 text-white py-2 px-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
            Home
          </button>
        </div>
      </nav>
      <main className="flex-grow container mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
