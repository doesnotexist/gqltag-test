import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const { logIn, logOut, isAuthenticated } = useAuth()

  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>HomePage</h1>
      <p>
        <button onClick={isAuthenticated ? logOut : logIn}>
          {isAuthenticated ? 'log out' : 'log in'}
        </button>
      </p>
    </>
  )
}

export default HomePage
