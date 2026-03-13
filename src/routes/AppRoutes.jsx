import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Loader from "../components/common/Loader";

// Lazy load pages for better performance
const HomePage = lazy(() => import("../pages/HomePage"));
const EpisodesPage = lazy(() => import("../pages/EpisodesPage"));
const EpisodeDetailPage = lazy(() => import("../pages/EpisodeDetailPage"));
const ServicesPage = lazy(() => import("../pages/ServicesPage"));
const ServiceDetailPage = lazy(() => import("../pages/ServiceDetailPage"));
const WhyMePage = lazy(() => import("../pages/WhyMePage"));
const ReviewsPage = lazy(() => import("../pages/ReviewsPage"));
const FAQPage = lazy(() => import("../pages/FAQPage"));
const BookSlotPage = lazy(() => import("../pages/BookSlotPage"));
const Terms = lazy(() => import("../pages/Terms"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="episodes" element={<EpisodesPage />} />
          <Route path="episodes/:id" element={<EpisodeDetailPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:id" element={<ServiceDetailPage />} />
          <Route path="why-me" element={<WhyMePage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="book-slot" element={<BookSlotPage />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;