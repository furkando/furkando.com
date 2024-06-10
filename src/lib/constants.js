import { BookmarkIcon, GithubIcon, HomeIcon, LinkedinIcon, NavigationIcon, PencilLineIcon } from 'lucide-react'

export const PROFILES = {
  github: {
    title: 'GitHub',
    url: 'https://github.com/furkando',
    icon: <GithubIcon size={16} />
  },
  linkedin: {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/furkando',
    icon: <LinkedinIcon size={16} />
  },
  twitter: {
    title: 'X (Twitter)',
    username: 'frkndo',
    url: 'https://twitter.com/intent/user?screen_name=frkndo',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    )
  },
  resume: {
    title: 'Resume',
    url: ' /assets/furkan_dogan_resume.pdf',
    icon: <BookmarkIcon size={16} />
  }
}

export const TWEETS_COLLECTION_ID = 44698492

export const COLLECTION_IDS = [
  TWEETS_COLLECTION_ID,
  44995745,
  44699803,
  44698494,
  44698493,
  44698491,
  44698489,
  44698488,
  44698486,
  44698483,
  44698482,
  44698480,
  44698478,
  44698477,
  44698475
]

export const LINKS = [
  {
    href: '/',
    label: 'Home',
    icon: <HomeIcon size={16} />
  },
  {
    href: '/journey',
    label: 'Journey',
    icon: <NavigationIcon size={16} />
  },
  {
    href: '/writing',
    label: 'Writing',
    icon: <PencilLineIcon size={16} />
  },
  {
    href: '/bookmarks',
    label: 'Bookmarks',
    icon: <BookmarkIcon size={16} />
  }
]

export const SCROLL_AREA_ID = 'scroll-area'
export const MOBILE_SCROLL_THRESHOLD = 20
export const SUPABASE_TABLE_NAME = 'pages'

export const SUBMIT_BOOKMARK_FORM_TITLE = 'Submit a bookmark'
export const SUBMIT_BOOKMARK_FORM_DESCRIPTION =
  "Send me a website you like and if I like it too, you'll see it in the bookmarks list. With respect, please do not submit more than 5 websites a day."
export const MAX_BOOKMARK_SUBMISSIONS_PER_DAY = 5
export const BOOKMARK_SUBMISSION_COUNT_COOKIE_NAME = 'formSubmissionCount'

export const CONTENT_TYPES = {
  PAGE: 'page',
  POST: 'post',
  LOGBOOK: 'logbook'
}
