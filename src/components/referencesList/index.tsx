import Head from "next/head";
import { useTranslation } from "react-i18next";
import SectionTitle from "../sectionTitle";

export default function ReferencesList() {
  const { t } = useTranslation("global");
  const projects = [
    {
      category: t("referencescat4"),
      items: [
        "Tər-tər Heydər Əliyev Mərkəzi",
        "Quba İcra Hakimiyyəti",
        "Daxili İşlər Nazirliyi, Çevik Polis Alayı",
        "İmişli İcra Hakimiyyəti",
        "Azerbaycan Kənd Təsərrufatı Nazirliyi",
        "Səbail rayon prokuraturası",
        "Gürcüstan Respublikası Dumanisi Heydər Əliyev Muzeyi",
        "Tacikistan Azərbaycan Səfirliyi",
        "Salyan Prokurorluğu",
        "Siyəzən Heydər Əliyev Mərkəzi",
        "Qaradağ Heydər Əliyev Mərkəzi",
        "Səbail rayon polis idarəsi",
        "Yevlax rayon Vergilər idarəsi",
        "Şirvan şəhəri Vergilər idarəsi",
        "Abşeron rayon polis idarəsi",
        "Azərbaycan Milli Elmlər Akademiyası",
        "Dövlət Miqrasiya Xidmətinin İnzibati binası",
        "Daxili İşlər Nazirliyinin Bərdə Daxili Qoşunlarının Kazarması",
        "Daxili Qoşunların Miqrasiya Xidməti",
        "Daxili Qoşunların İnsan Alverinə Qarşı Mübarizə İdarəsi",
        "Daxili Qoşunların Banditizmə Qarşı Mübarizə İdarəsi",
        "Geydiyyat ve Notariat Baş İdaresi - Ədliyyə nazirliyi",
        "Dövlət sərhəd xidməti akademiyası",
        "Ekologiya nazirliyi",
        "Azərbaycan Respublikası Vergilər Nazirliyinin Vahid Pəncərə Sistemi (13 rayon)",
        "Sərhəd Qoşunları Akademiyası",
        "Sərhəd Qoşunları Goradil Qəsəbəsi İstirahət Kompleksi",
        "Daxili İşlər Nazirliyi, Polis Akademiyasının Heydər Əliyev Muzeyi",
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
        "Ağcabədi Heydər Əliyev Muzeyi",
        "Mingəçevir Heydər Əliyev Muzeyi",
        "Lənkəran Heydər Əliyev Muzeyi",
        "Biləsuvar Heydər Əliyev Muzeyi",
        "Saatlı Heydər Əliyev Muzeyi",
        "Sabirabad Heydər Əliyev Muzeyi",
        "Tovuz Heydər Əliyev Muzeyi",
        "Göy-göl Heydər Əliyev Muzeyi",
        "Hacıqabul Heydər Əliyev Muzeyi",
        "Samux Heydər Əliyev Muzeyi",
        "Oğuz Heydər Əliyev Muzeyi",
      ],
    },
    {
      category: t("referencescat2"),
      items: [
        "Qazax Uşaq Əyləncə Mərkəzi",
        "Qazax Ədəbiyyat Muzeyi",
        "Qazax Yeni Azərbaycan Partiyası İnzibati Binası",
        "Qazax Gənclər Mərkəzi",
        "Sumgayıt şəhəri kimyaçı mədəniyyət sarayı",
        "Sabirabad Gənclər Mərkəzi",
        "Şəki Olimpiya Kompleksi",
        "Göy-göl Gənclər Mərkəzi",
        "Göy-göl Uşaq Əyləncə Mərkəzi",
        "Quba Gənclər Mərkəzi",
      ],
    },

    {
      category: t("referencescat3"),
      items: [
        "Mariana Trench otel/restaurant & spa",
        "Dad House Lənkəran",
        "Dad House residence Lənkəran",
        "DİN Xezri hotel &istirahət mərkəzi Bilgəh",
        "Bagçalı Saray",
        "AĞALI HOTEL | Zengilan",
        "Baku White City Residence",
        "Reddison Hotel | Norway",
      ],
    },

    {
      category: t("referencescat7"),
      items: [
        "Balakhanı Socar inzibati binaları",
        "Kontact home mağazalar şebekesi",
        "Bayraktar Baku Ofis",
        "Bayraktar herbi hisse 1 & 2",
      ],
    },
  ];
  return (
    <div className="w-full md:pb-14 pb-10 text-textPrimary z-40 min-h-screen md:px-20 px-6 relative bg-primary">
      <Head>
        <meta
          name="description"
          content="Şirketimizin başarıyla tamamladığı projeler"
        />
      </Head>
      <main className="py-8">
        <SectionTitle title={t("referencesListTitle")} color="textPrimary" />
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
                    className="md:text-lg  text-center list-none md:list-item text-white "
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
