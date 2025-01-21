import NewsList from '@/app/components/NewsList/NewsList';
import React from 'react';
import { getLatestNews } from '@/lib/news';

function LatestNewsPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News Page</h2>
      <NewsList news={latestNews} />
    </>
  );
}

export default LatestNewsPage;
