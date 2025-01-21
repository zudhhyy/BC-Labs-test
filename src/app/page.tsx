import { FC } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import HeroHome from '@/components/hero/HeroHome';

import { HomeData } from '@/types/home';

interface HomeProps {
  homeData: HomeData;
}

const Home: FC<HomeProps> = async () => {
  const res = await fetch('http://localhost:3000/api/data');
  const homeData = await res.json();

  return (
    <div>
      <div className="flex flex-col bg-hero bg-center pb-[60px] text-white lg:bg-[length:100%_100%] lg:pb-[108px]">
        <Navbar />
        <HeroHome homeData={homeData} />
      </div>
      <Footer companyDetail={homeData.companyDetail} footerMenu={homeData.footerMenu} />
    </div>
  );
};

export default Home;
