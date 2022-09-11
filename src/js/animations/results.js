import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import charts from "../charts";

gsap.registerPlugin(ScrollTrigger);

const resultsTimeline = gsap.timeline();

const resourceHeaderAnimation = () => {
  resultsTimeline.fromTo(
    ".life_results h3",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
  );
  resultsTimeline.fromTo(
    ".life_results article",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
};

const earnedResultsAnimations = () => {
  const earnedResultsTimeline = gsap.timeline();
  earnedResultsTimeline.fromTo(
    ".results .column_1 figure",
    { opacity: 0, x: 50 },
    { opacity: 1, x: 0, duration: 1.5, ease: "power4.out" }
  );
  earnedResultsTimeline.fromTo(
    ".results .column_1 h1",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
    "-=1.25"
  );
  earnedResultsTimeline.fromTo(
    ".results .column_2 .column_2_item",
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 },
    "-=1.95"
  );
  earnedResultsTimeline.fromTo(
    ".results .column_2 .column_2_text",
    { opacity: 0, x: 25 },
    { opacity: 1, x: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 },
    "-=2"
  );
  earnedResultsTimeline.fromTo(
    ".results .student_invest_of_time header",
    { opacity: 0, x: 25 },
    { opacity: 1, x: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 },
    "-=1.85"
  );
  earnedResultsTimeline.fromTo(
    ".results .student_invest_of_time_content",
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", stagger: 0.25 },
    "-=1.90"
  );
};

const resultsScrollTrigger = () => {
  ScrollTrigger.create({
    trigger: ".results",
    once: true,
    onEnter: () => {
      resourceHeaderAnimation();
      charts();
    },
  });
  ScrollTrigger.create({
    trigger: ".results .earned_results",
    once: true,
    onEnter: () => {
      earnedResultsAnimations();
    },
  });
};

export default resultsScrollTrigger;
