import React from "react";
import SectionTitle from "../sectionTitle";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="md:px-20 px-6 pb-10 z-40 bg-bgPrimary w-full">
      <SectionTitle title="Hakkımızda" />
      <div className="flex flex-col md:flex-row gap-8 md:pt-10 text-textSecondary">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex gap-5 font-semibold flex-1 text-2xl"
        >
          <img
            src="images/gallery/gallery4.jpeg"
            className="w-full h-full object-cover rounded-lg"
            alt=""
          />
        </motion.div>
        <motion.span
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex-1 font-medium md:text-xl text-base md:my-auto text-center md:text-left leading-9"
        >
          <p>
            2004 yılında Azerbaycan'da kurulan firmamız, perde sektöründe
            kaliteli ve şık çözümler sunarak yaşam alanlarınızı güzelleştirmeyi
            hedeflemektedir. Uzun yıllara dayanan deneyimimiz ve tutkulu
            ekibimizle birlikte, müşterilerimize en iyi ürünleri ve hizmetleri
            sunmaktan gurur duyuyoruz.
          </p>
          <br />
          <p>
            Müşteri memnuniyeti bizim için en önemli önceliklerden biridir. Her
            bir müşterimizin benzersiz ihtiyaçlarına odaklanarak, evlerini veya
            işyerlerini istedikleri gibi dekore etmelerine yardımcı olmak için
            geniş bir ürün yelpazesi sunuyoruz. Perde seçiminde size rehberlik
            etmek, doğru ürünleri sunmak ve en son trendleri takip ederek size
            ilham vermek için buradayız.
          </p>
          <br />
          <p>
            Sadece evler için değil, aynı zamanda oteller ve devlet kurumları
            gibi büyük projelerde de başarılı çalışmalar gerçekleştiriyoruz.
            Profesyonel terzilerimiz, ustalarımız ve dizaynerimizle birlikte her
            projeye kişisel bir dokunuş katarak, müşterilerimizin beklentilerini
            aşmayı hedefliyoruz.
          </p>
          <br />
          <p>
            Yenilikçi tasarımlarımız ve kaliteli işçiliğimizle sektörde fark
            yaratıyor, her geçen gün büyüyen müşteri portföyümüzle gurur
            duyuyoruz. Misyonumuz, her zaman en yüksek kalite standartlarını
            koruyarak, müşterilerimize en iyi hizmeti sunmaktır.
          </p>
        </motion.span>
      </div>
    </div>
  );
};

export default About;
