import Header from '@/components/Header';
import RecentProducts from '@/components/RecentProducts';
import ShopByCategory from '@/components/ShopByCategory';
import TopProducts from '@/components/TopProducts';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      <TopProducts />
      <RecentProducts />
      <ShopByCategory />
    </main>
  );
};
