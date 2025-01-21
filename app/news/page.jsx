import React from 'react';
import NewsList from '../components/NewsList/NewsList';
import { DUMMY_NEWS } from '@/dummyNews';

async function NewsPage() {
  return (
    <>
      <main>
        <h1>News Page</h1>
        <NewsList news={DUMMY_NEWS} />
      </main>
    </>
  );
}

export default NewsPage;
