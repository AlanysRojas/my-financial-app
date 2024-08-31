import { useState } from "react";

export const useSearch = <T>(items: T[], searchField: keyof T) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredItems = items.filter((item) => {
    const fieldValue = item[searchField];
    return typeof fieldValue === "string"
      ? fieldValue.toLowerCase().includes(searchTerm.toLowerCase())
      : fieldValue?.toString().toLowerCase().includes(searchTerm.toLowerCase());
  });

  return {
    searchTerm,
    setSearchTerm,
    filteredItems,
  };
};
