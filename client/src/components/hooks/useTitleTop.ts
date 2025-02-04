import { useEffect } from "react";

export const useTitleTop = (title: string) => {
  useEffect(() => {
    document.title = `${title}| ROYAL KNIGHT`;
    window.scrollTo(0, 0);
  }, [title]);
};