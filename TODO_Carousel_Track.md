# Track-Based Carousel Implementation - TODO

## Objective
Implement smooth, continuous track-based carousel animation identical to Backstage.com

## Plan Approved: ✅

---

## Phase 1: Home.jsx Implementation
- [ ] 1.1 Simplify state (remove direction/animating state)
- [ ] 1.2 Create track-based HTML structure
- [ ] 1.3 Implement simplified navigation logic
- [ ] 1.4 Update touch/swipe handlers
- [ ] 1.5 Update keyboard handlers
- [ ] 1.6 Update indicator click handlers

## Phase 2: index.css Implementation
- [ ] 2.1 Create viewport and track structure
- [ ] 2.2 Implement CSS transition for track movement
- [ ] 2.3 Create active/inactive slide styling
- [ ] 2.4 Add scale, opacity, blur effects
- [ ] 2.5 Add responsive breakpoints
- [ ] 2.6 Add accessibility (prefers-reduced-motion)

## Phase 3: Testing
- [ ] 3.1 Test left/right arrow navigation
- [ ] 3.2 Test rapid clicking behavior
- [ ] 3.3 Test keyboard navigation
- [ ] 3.4 Test touch/swipe on mobile
- [ ] 3.5 Test indicator dots
- [ ] 3.6 Verify no layout shifts or jumps

## Success Criteria
- ✅ Track slides horizontally via transform
- ✅ All slides remain in DOM
- ✅ No element swapping
- ✅ Smooth 500ms transition with cubic-bezier
- ✅ Active slide: scale 1, opacity 1, no blur
- ✅ Inactive slides: scale 0.85, opacity 0.4, blur 2px
- ✅ Works with rapid navigation clicks

## Files Modified
- src/pages/Home.jsx
- src/index.css

