export const getLanguage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("language") || "az"; // Varsayılan dil burada 'az' olarak varsayalım
  }
  return "az"; // Sunucu taraflı çalışırken varsayılan dil
};

export const setLanguage = (language: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("language", language);
  }
};
