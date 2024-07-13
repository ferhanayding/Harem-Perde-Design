import Head from "next/head";
import { useTranslation } from "react-i18next";
import SectionTitle from "../sectionTitle";

export default function ReferencesList() {
  const { t } = useTranslation("global");
  const projects = [
    {
      category: t("referencescat1"),
      items: [
        "Lənkəran Zərifə Əliyeva adına Uşaq Xəstəxanası",
        "Lənkəran İnternat Məktəbinin Yenileme Çalışmaları",
        "Sabirabad Gənclər Mərkəzi",
        "Ucar Qazıqumlaq Orta Məktəbi",
        "Şəki Olimpiya Kompleksi",
      ],
    },
    {
      category: t("referencescat2"),
      items: [
        "Qazax Uşaq Əyləncə Mərkəzi",
        "Qazax Ədəbiyyat Muzeyi",
        "Qazax Yeni Azərbaycan Partiyası İnzibati Binası",
        "Qazax Şahmat Məktəbi",
        "Qazax Gənclər Mərkəzi",
      ],
    },
    {
      category: t("referencescat3"),
      items: [
        "Göy-göl Gənclər Mərkəzi",
        "Göy-göl Uşaq Əyləncə Mərkəzi",
        "Quba Gənclər Mərkəzi",
        "Siyəzən Heydər Əliyev Mərkəzi",
        "Qaradağ Heydər Əliyev Mərkəzi",
      ],
    },
    {
      category: t("referencescat4"),
      items: [
        "Daxili İşlər Nazirliyi, Çevik Polis Alayı",
        "Daxili İşlər Nazirliyinin Bərdə Daxili Qoşunlarının Kazarması",
        "Daxili Qoşunların Miqrasiya Xidməti",
        "Daxili Qoşunların İnsan Alverinə Qarşı Mübarizə İdarəsi",
        "Daxili Qoşunların Banditizmə Qarşı Mübarizə İdarəsi",
      ],
    },
    {
      category: t("referencescat5"),
      items: [
        "Gürcüstan Respublikası Dumanisi Heydər Əliyev Muzeyi",
        "Özbəkistan Azərbaycan Səfirliyi Azərbaycan Guşəsi",
        "Tacikistan Azərbaycan Səfirliyi Azərbaycan Guşəsi",
        "Moskva Dövlət Beynəlxalq Əlaqələr Universiteti – Heydər Əliyevin Anım Gününə Həsr Olunmuş Stendlərin Qurulması",
      ],
    },
    {
      category: t("referencescat6"),
      items: [
        "Bərdə Heydər Əliyev Muzeyi",
        "Daşkəsən Heydər Əliyev Muzeyi",
        "Qəbələ Heydər Əliyev Muzeyi",
        "Şəmkir Heydər Əliyev Muzeyi",
        "Zaqatala Heydər Əliyev Muzeyi",
      ],
    },
    {
      category: t("referencescat7"),
      items: [
        "Azərbaycan Respublikası Vergilər Nazirliyinin Vahid Pəncərə Sistemi (13 rayon)",
        "Sərhəd Qoşunları Akademiyası",
        "Sərhəd Qoşunları Goradil Qəsəbəsi İstirahət Kompleksi",
        "Daxili İşlər Nazirliyi, Polis Akademiyasının Heydər Əliyev Muzeyi",
        "İqtisadi İnkişaf Nazirliyinin Antiinhisar və Sahibkarlığa Yardım Fondu",
      ],
    },
  ];
  return (
    <div className="w-full md:pb-14 pb-10 text-textSecondary z-40 min-h-screen md:px-20 px-6 relative bg-bgPrimary">
      <Head>
        <title>Referans Projelerimiz</title>
        <meta
          name="description"
          content="Şirketimizin başarıyla tamamladığı projeler"
        />
      </Head>
      <main className="py-8">
        <SectionTitle title={t("referencesListTitle")} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((projectCategory, index) => (
            <div key={index} className="mb-8">
              <h2 className="md:text-2xl   text-center  font-semibold mb-4">
                {projectCategory.category}
              </h2>
              <ul className="list-disc list-inside">
                {projectCategory.items.map((project, i) => (
                  <li
                    key={i}
                    className="md:text-lg  text-center list-none md:list-item "
                  >
                    {project}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
