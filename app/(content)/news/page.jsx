import React from 'react';
import NewsList from '@/app/components/NewsList/NewsList';
import { getAllNews } from '@/lib/news';

async function NewsPage() {
  const news = await getAllNews();
  return (
    <>
      <main>
        <h1>News Page</h1>
        <NewsList news={news} />
      </main>
    </>
  );
}

export default NewsPage;
