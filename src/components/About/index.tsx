import React from "react";
import SectionTitle from "../sectionTitle";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="md:px-20 px-6 pb-10   w-full">
      <SectionTitle title="Hakkımızda" />
      <div className="flex  flex-col md:flex-row gap-8   md:pt-10 text-textSecondary ">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex gap-5 font-semibold flex-1 text-2xl "
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
          className="flex-1 font-medium  md:text-xl text-base md:my-auto text-center md:text-left leading-9   "
        >
          2004 yılından beri, kaliteli ve şık perde çözümleri sunarak yaşam
          alanlarınızı güzelleştirmeyi hedefliyoruz. Uzun yıllara dayanan
          deneyimimiz ve tutkulu ekibimizle birlikte, müşterilerimize en iyi
          ürünleri ve hizmetleri sunmaktan gurur duyuyoruz.
          <br />
          <br />
          Müşteri memnuniyeti bizim için en önemli önceliklerden biridir. Her
          bir müşterimizin benzersiz ihtiyaçlarına odaklanarak, evlerini veya
          işyerlerini istedikleri gibi dekore etmelerine yardımcı olmak için
          geniş bir ürün yelpazesi sunuyoruz. Perde seçiminde size rehberlik
          etmek, doğru ürünleri sunmak ve en son trendleri takip ederek size
          ilham vermek için buradayız.
        </motion.span>
      </div>
    </div>
  );
};

export default About;
