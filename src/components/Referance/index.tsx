import React from "react";
import SectionTitle from "../sectionTitle";
import { worksData } from "./data";
import { Gallery } from "react-grid-gallery";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const getVideoEmbedUrl = (url?: string) => {
  if (!url) return "";

  if (url.includes("youtube.com/embed/")) return url;

  const videoIdMatch = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  if (videoIdMatch?.[1]) {
    return `https://www.youtube.com/embed/${videoIdMatch[1]}?rel=0`;
  }

  return "";
};

const Refarance = () => {
  const { t } = useTranslation("global");
  const featureText =
    "“Meysari Grand Hotel & SPA” kompleksinin açılışında iştirak edən Prezident İlham Əliyevə və birinci xanım Mehriban Əliyevaya təşəkkür edirik. Ölkəmizin turizm və xidmət sektorunun inkişafına töhfə verən uğurlu bir layihə olsun! HAREM PƏRDƏ ailesi olaraq, bu dəyərli layihənin bir hissəsi olduğumuz üçün qürur duyuruq. Dövlət başçımıza və nümayəndə heyətinə təşəkkür edirik. Ölkəmizin turizminə dəyər qatan bu gözəl addımı dəstəkləyirik.”"
  return (
    <div
      id="refarance"
      className="bg-bgPrimary z-40 relative pattern-soft   text-textPrimary md:px-20 h-full px-6 py-5 pb-24 w-full"
    >
      <SectionTitle title={t("references")} color="textSecondary" />
      <div className="md:mt-16 ">
        {worksData.map((work, index) => {
          const firstVideo = work.photos.find((item) => item.src.includes("youtu"));
          const galleryImages = work.photos.filter((item) => !item.src.includes("youtu"));

          return (
            <div key={index} className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <span className=" p-4 text-textSecondary font-semibold text-sm  md:text-2xl ">
                  {work.workName}
                </span>
              </div>

              {index === 0 && firstVideo ? (
                <>
                  <div className="hidden md:block">
                    <div className="grid grid-cols-2 gap-6 items-start">
                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <iframe
                          src={getVideoEmbedUrl(firstVideo.src)}
                          title={work.workName}
                          className="h-full w-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>

                      <div className="text-[#1b1b1b] text-sm leading-7 md:text-base">
                        <p>{featureText}</p>
                      </div>
                    </div>
                  </div>

                  <div className="md:hidden">
                    <div className="mb-5 aspect-[4/3] w-full overflow-hidden">
                      <iframe
                        src={getVideoEmbedUrl(firstVideo.src)}
                        title={work.workName}
                        className="h-full w-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="mb-6 text-[#1b1b1b] text-sm leading-7">
                      <p>{featureText}</p>
                    </div>
                  </div>

                  {galleryImages.length > 0 && (
                    <>
                      <div className="hidden md:grid md:grid-cols-3 md:gap-4 md:mt-6">
                        {galleryImages.map((image, imageIndex) => (
                          <img
                            key={`${image.src}-${imageIndex}`}
                            src={image.src}
                            alt={`${work.workName}-${imageIndex}`}
                            className="h-[180px] w-full object-cover"
                          />
                        ))}
                      </div>

                      <div className="md:hidden mt-3 space-y-4">
                        {galleryImages.map((image, imageIndex) => (
                          <img
                            key={`${image.src}-${imageIndex}-mobile`}
                            src={image.src}
                            alt={`${work.workName}-${imageIndex}`}
                            className="h-[170px] w-full object-cover"
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : null}

              {index !== 0 ? (
                <>
                  <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 200 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="hidden md:block"
                  >
                    <Gallery
                      images={work.photos}
                      enableImageSelection={false}
                      rowHeight={500}
                    />
                  </motion.div>
                  <div className="md:hidden">
                    {work.photos.map((curtain, photoIndex) => (
                      <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: photoIndex % 2 === 0 ? -100 : 100 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        key={curtain.src}
                        className="w-full h-full mb-5"
                      >
                        <img
                          src={curtain?.src}
                          alt={"curtain"}
                          className="object-cover w-full h-full"
                        />
                      </motion.div>
                    ))}
                  </div>
                </>
              ) : null}

              {worksData.length - 1 === index ? null : (
                <hr className=" my-5 md:my-10 border-t-2 border-primary" />
              )}
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-screen h-3 bg-primary z-40"></div>
      <div className="absolute bottom-0 left-0 w-[52%] h-5 bg-primary z-40 rotate-1 "></div>
      <div className="absolute bottom-0 right-0 w-[52%] h-5 bg-primary z-40 -rotate-1 "></div>
    </div>
  );
};

export default Refarance;
