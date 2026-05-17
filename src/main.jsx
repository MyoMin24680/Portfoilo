import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AllRoute from './pages/AllRoute'
import Footer from './componment/footer/Footer'
import Navbar from './pages/navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'

// ၁။ AOS import ကို ဒီနေရာ (ထိပ်ဆုံး) မှာပဲ ထားရပါမယ်
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Root = () => {
  // ၂။ AOS.init ကို useEffect ထဲမှာ ထားတာ မှန်ပါတယ်
  useEffect(() => {
    AOS.init({
      duration: 800,     // Animation ကြာချိန် (သိပ်မမြန်၊ သိပ်မနှေးတဲ့ အနေအထား)
    easing: 'ease-out-back', // Animation သွားတဲ့ပုံစံက အဆုံးနားမှာ နည်းနည်းလေး တုန်သွားတဲ့ (bounce) ပုံစံမို့ ပိုကြည့်ကောင်းတယ်
    once: false,       // အပေါ်ပြန်တက်ရင်လည်း animation ပြန်ပြချင်ရင် false ထားပါ
    mirror: true,      // အပေါ်ပြန်တက်ရင်လည်း animation အလုပ်လုပ်မယ်
    offset: 120,       // screen အောက်ခြေကနေ ၁၂၀ pixel ကျော်မှ စလုပ်မယ်
    disable: 'mobile', // မိုဘိုင်းမှာ AOS ကို ပိတ်ချင်ရင် ဒီ option ကို သုံးနိုင်ပါတယ် (သို့မဟုတ် function သုံးပြီး device type အလိုက် disable လုပ်နိုင်ပါတယ်)
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <AllRoute />
      </div>
      <Footer />
    </Router>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);