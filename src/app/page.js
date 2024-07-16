import { Suspense } from 'react'

import { FloatingHeader } from '@/components/floating-header'
import { Link } from '@/components/link'
import { PageTitle } from '@/components/page-title'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { ScrollArea } from '@/components/scroll-area'
import { Button } from '@/components/ui/button'
import { WritingList } from '@/components/writing-list'
import { getAllPosts } from '@/lib/contentful'
import { getItemsByYear, getSortedPosts } from '@/lib/utils'

async function fetchData() {
  const allPosts = await getAllPosts()
  const sortedPosts = getSortedPosts(allPosts)
  const items = getItemsByYear(sortedPosts)
  return { items }
}

export default async function Home() {
  const { items } = await fetchData()

  return (
    <ScrollArea useScrollAreaId>
      <FloatingHeader scrollTitle="Furkan Doğan" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Home" className="lg:hidden" />
          <h1 className="mb-4 text-4xl font-bold">Hi! I'm Furkan 👋</h1>
          <br />
          <p>
            Builder of{' '}
            <Link href="https://cronshot.io" target="_blank" rel="noopener noreferrer">
              CronShot
            </Link>{' '}
            and software engineer based in Ankara, Turkey. Passionate about building products, reading books, and
            traveling.
          </p>
          <p>
            Developing stuff at{' '}
            <Link href="https://usehaystack.io" target="_blank" rel="noopener noreferrer">
              Haystack
            </Link>{' '}
            to helping build data-driven software teams.
          </p>
          <Button asChild variant="link" className="inline px-0">
            <Link href="/writing">
              <h2 className="mb-4 mt-8">Writing</h2>
            </Link>
          </Button>

          <Suspense fallback={<ScreenLoadingSpinner />}>
            <WritingList items={items} />
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  )
}
