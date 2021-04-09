import React, { useCallback, useEffect, useRef, useState } from 'react';

const LazyLoader = ({
  threshold = [0.5, 0.75, 1],
  rootMargin = '0px',
  debounce = null,
  fallback = null,
  once = false,
  root = null,
  children,
  delay,
 }) => {
  const imgRef = useRef(null);
  const timeoutRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const onIntersect = useCallback(
    e => {
      if (e.intersectionRatio > Math.min(...threshold)) {
        setIsVisible(true);
      } else if (!once && e.intersectionRatio <= Math.min(...threshold)) {
        setIsVisible(false);
      }
    },
    [setIsVisible, threshold, once],
  );

  const handleIntersection = useCallback(
    entries => {
      const timeout = debounce || delay;
      entries.forEach(e => {
        if (debounce) {
          clearTimeout(timeoutRef.current);
        }
        if (timeout) {
          timeoutRef.current = setTimeout(() => {
            onIntersect(e);
          }, timeout);
          return;
        }
        onIntersect(e);
      });
    },
    [delay, onIntersect, debounce],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(e => handleIntersection(e), {
      root,
      rootMargin,
      threshold,
    });
    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [root, rootMargin, threshold, handleIntersection]);

  useEffect(() => {
    const { current } = timeoutRef;
    return () => {
      if (current) {
        clearTimeout(current);
      }
    };
  }, [timeoutRef]);

  return (
    <div ref={imgRef}>
      {isVisible ? children : fallback}
    </div>
  );
};

export default LazyLoader;
