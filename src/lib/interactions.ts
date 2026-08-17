/**
 * jQuery-powered site interactions: scroll reveal, smooth in-page scrolling
 * and header elevation on scroll. Called once per page from useSiteInteractions.
 */
import $ from "jquery";

export function initInteractions() {
  const $win = $(window);

  // Reveal-on-scroll via IntersectionObserver so it stays correct at any
  // viewport size and for content mounted later (sliders, lazy images).
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
  );

  const observeAll = () => {
    document.querySelectorAll(".reveal:not(.is-revealed)").forEach((el) => observer.observe(el));
  };
  observeAll();

  const mutations = new MutationObserver(observeAll);
  mutations.observe(document.body, { childList: true, subtree: true });

  const elevateHeader = () => {
    $("[data-site-header]").toggleClass("is-stuck", ($win.scrollTop() ?? 0) > 16);
  };

  const onScroll = () => {
    elevateHeader();
  };

  $win.on("scroll.wopf resize.wopf", onScroll);


  // Smooth scrolling for in-page anchors (e.g. the donate section).
  $(document).on("click.wopf", 'a[href^="#"]', function (event) {
    const href = $(this).attr("href");
    if (!href || href === "#") return;
    const $target = $(href);
    if (!$target.length) return;
    event.preventDefault();
    $("html, body").animate({ scrollTop: $target.offset()!.top - 96 }, 650);
  });

  onScroll();
  window.setTimeout(onScroll, 250);

  return () => {
    $win.off(".wopf");
    $(document).off(".wopf");
    observer.disconnect();
    mutations.disconnect();
  };
}

