"use client";

import React, { Suspense, useState, useRef, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import gsap from "gsap";

const Content = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [currentTab, setCurrentTab] = useState(
    searchParams.get("tab") || "main"
  );
  const [displayedTab, setDisplayedTab] = useState(currentTab);

  const contentRef = useRef(null);

  useEffect(() => {
    const tab = searchParams.get("tab") || "main";
    setCurrentTab(tab);
  }, [searchParams]);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.5 }
    );
  }, []);

  const handleTabChange = (tab) => {
    if (tab === currentTab) return;

    gsap.to(contentRef.current, {
      opacity: 0,
      x: -100,
      duration: 0.5,
      onComplete: () => {
        setCurrentTab(tab);
        setDisplayedTab(tab);
        router.push(`paper/?tab=${tab}`);

        gsap.fromTo(
          contentRef.current,
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 0.5 }
        );
      },
    });
  };

  return (
    <div className="flex" style={{ height: "calc(100vh - 100px)" }}>
      <div className="w-1/5 p-4 bg-gray-600">
        <h2>Side</h2>
        <ul>
          <li
            onClick={() => handleTabChange("main")}
            className={`cursor-pointer p-2 ${
              currentTab === "main" ? "font-bold" : ""
            }`}
          >
            Main
          </li>
          <li
            onClick={() => handleTabChange("second")}
            className={`cursor-pointer p-2 ${
              currentTab === "second" ? "font-bold" : ""
            }`}
          >
            Second
          </li>
        </ul>
      </div>

      <div className="w-4/5 overflow-y-auto">
        <div ref={contentRef}>
          {displayedTab === "main" && (
            <div className="text-cblack-100">
              <div className="relative flex justify-between h-[300px] bg-cblack-100">
                <div className="absolute bottom-3 left-3">
                  <p className="text-2xl font-bold text-white">
                    Centered Content1
                  </p>
                </div>
              </div>

              <p>This is the main content</p>
            </div>
          )}
          {displayedTab === "second" && (
            <div className="text-cblack-100">
              <div className="relative flex justify-between h-[300px] bg-cblack-100">
                <div className="absolute bottom-3 left-3">
                  <p className="text-2xl font-bold text-white">
                    Centered Content2
                  </p>
                </div>
              </div>

              <p>This is the second content</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Index = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Content />
  </Suspense>
);

export default Index;
