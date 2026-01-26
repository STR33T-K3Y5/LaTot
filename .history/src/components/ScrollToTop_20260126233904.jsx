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
