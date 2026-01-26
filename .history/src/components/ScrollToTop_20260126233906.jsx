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
