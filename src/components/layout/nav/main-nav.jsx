import React, { useEffect, useState } from "react";
import { StyledMainNav } from "./style";
import { useAuth } from "../../app/AuthContext.jsx";

export const NAV_ITEMS = [
  { href: "#main", id: "main", label: "Главная" },
  { href: "#pick", id: "pick", label: "Что мыть" },
  { href: "#technique", id: "technique", label: "Техника" },
  { href: "#how", id: "how", label: "Как арендовать" },
  { href: "#comments", id: "comments", label: "Отзывы" },
  { href: "#services", id: "services", label: "Доп. услуги" },
];

export default function MainHeaderNav({ onNavigate }) {
  const { isAuthenticated, logout } = useAuth();
  const [activeId, setActiveId] = useState("main");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;

    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const ratios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId = null;
        let bestRatio = 0;
        for (const id of sectionIds) {
          const r = ratios.get(id) || 0;
          if (r > bestRatio) {
            bestRatio = r;
            bestId = id;
          }
        }

        if (bestId) {
          setActiveId(bestId);
        }
      },
      {
        rootMargin: "-25% 0px -45% 0px",
        threshold: [0, 0.15, 0.35, 0.6],
      }
    );

    const observeAvailable = () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    };

    observeAvailable();

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e, href, id) => {
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      const reducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
      setActiveId(id);
    }
    if (onNavigate) onNavigate();
  };

  return (
    <StyledMainNav aria-label="Разделы сайта">
      {NAV_ITEMS.map((item) => {
        const isActive = activeId === item.id;
        return (
          <a
            key={item.href}
            href={item.href}
            className={isActive ? "is-active" : ""}
            aria-current={isActive ? "location" : undefined}
            onClick={(e) => handleLinkClick(e, item.href, item.id)}
          >
            <span className="nav-label">{item.label}</span>
          </a>
        );
      })}
      {isAuthenticated ? (
        <button
          type="button"
          className="nav-logout"
          onClick={() => {
            logout();
            if (onNavigate) onNavigate();
          }}
        >
          Выйти из аккаунта
        </button>
      ) : null}
    </StyledMainNav>
  );
}
