import './about.css';
import { TreePine, Droplets, PawPrint } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-container fade-in-up">
      <div className="about-content">
        <h2 className="section-title">Who We Are</h2>
        <p className="maname-regular" style={{fontSize:'20px'}}>
          පේරාදෙණිය විශ්ව විද්‍යාලයේ සොබා සංගමය තිරසාර හා පරිසර හිතකාමී අනාගතයක් නිර්මාණය කිරීමෙහිලා කැපවෙන ශක්තිමත් සහයෝගී සමූහයක් ලෙස ක්‍රියාත්මක වෙමින් පවතී.

සොබා සංගමයේ අපගේ මෙහෙවර විශ්ව විද්‍යාලයෙන් ඔබ්බට විහිදෙන අතර මිනිසුන් සහ සොබාදහම අතර හිතෛෂී සබදතාවක් ගොඩනැඟීමත්,
නව්‍යතම ක්‍රියාමාර්ග හරහා ස්වභාවික පරිසරය සුරක්ෂිත කිරීමත්, තිරසාර සංවර්ධනය ඔප් නංවාලීමත් ප්‍රමුඛ වේ.

සොබා සංගමය - හරිත හෙටක් කරා, නව්‍ය අදහස් කෙරෙන් අනාගතයට පියමනින සහයෝගී තරුණ්‍යයේ ජවයයි.
        </p>
        <div className="about-icons">
          <div className="icon-box">
            <TreePine size={48} className="icon-colored" />
            <span>Forests</span>
          </div>
          <div className="icon-box">
            <Droplets size={48} className="icon-colored" />
            <span>Oceans</span>
          </div>
          <div className="icon-box">
            <PawPrint size={48} className="icon-colored" />
            <span>Wildlife</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
