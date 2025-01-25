import NewsList from '@/app/components/NewsList/NewsList';
import React from 'react';
import { getLatestNews } from '@/lib/news';

async function LatestNewsPage() {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2>Latest News Page</h2>
      <NewsList news={latestNews} />
    </>
  );
}

export default LatestNewsPage;
