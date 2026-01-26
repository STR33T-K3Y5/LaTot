import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * 
 * A reusable component that automatically scrolls the window to the top
 * whenever the route changes in a React Router application.
 * 
 * How it works:
 * 1. Uses the useLocation hook to detect route changes
 * 2. Uses useEffect to trigger scroll to top when location changes
 * 3. The effect runs after every route change (including back/forward navigation)
 * 
 * Usage:
 * <ScrollToTop />
 * <ScrollToTop smooth /> // For smooth scrolling animation
 * 
 * @param {Object} props
 * @param {boolean} props.smooth - If true, enables smooth scrolling animation
 * @param {string} props.behavior - Scroll behavior (only used when smooth=true)
 * @param {string} props.target - Target element to scroll ('window' or a selector)
 */
const ScrollToTop = ({ 
  smooth = false,
  behavior = 'smooth',
  target = 'window'
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      if (target === 'window') {
        // Scroll the window to top
        if (smooth) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: behavior
          });
        } else {
          // Instant scroll - more performant for rapid navigation
          window.scrollTo(0, 0);
        }
      } else {
        // Scroll a specific element to top
        const element = document.querySelector(target);
        if (element) {
          if (smooth) {
            element.scrollTo({
              top: 0,
              left: 0,
              behavior: behavior
            });
          } else {
            element.scrollTop = 0;
            element.scrollLeft = 0;
          }
        }
      }
    };

    // Small delay ensures the DOM is ready after route change
    // This is especially important for pages with dynamic content
    const timeoutId = setTimeout(scrollToTop, 0);

    // Cleanup timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, [pathname, smooth, behavior, target]);

  // This component doesn't render anything
  return null;
};

export default ScrollToTop;

/**
 * Alternative version with explicit useLayoutEffect for better performance
 * Use this version if you notice any visual flicker during navigation
 */
export const ScrollToTopOptimized = ({ 
  smooth = false,
  behavior = 'smooth',
  target = 'window'
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame for smoother scrolling
    let animationFrameId;

    const scrollWithAnimation = () => {
      if (target === 'window') {
        animationFrameId = requestAnimationFrame(() => {
          if (smooth) {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: behavior
            });
          } else {
            window.scrollTo(0, 0);
          }
        });
      } else {
        const element = document.querySelector(target);
        if (element) {
          animationFrameId = requestAnimationFrame(() => {
            if (smooth) {
              element.scrollTo({
                top: 0,
                left: 0,
                behavior: behavior
              });
            } else {
              element.scrollTop = 0;

  return null;
};

/**
 * Version with custom scroll container support
 * Useful when your app uses a custom scroll container instead of window
 */
export const ScrollToTopWithContainer = ({ 
  smooth = false,
  behavior = 'smooth',
  containerRef
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      if (containerRef && containerRef.current) {
        if (smooth) {
          containerRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: behavior
          });
        } else {
          containerRef.current.scrollTop = 0;
          containerRef.current.scrollLeft = 0;
        }
      }
    };

    const timeoutId = setTimeout(scrollToTop, 0);
    return () => clearTimeout(timeoutId);
  }, [pathname, smooth, behavior, containerRef]);

  return null;
};

