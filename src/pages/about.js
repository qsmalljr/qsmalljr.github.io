import React from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { SEO } from "../utils"

export default ({ data }) => {
  // const MediaLink = ({ title, author, link }) => (
  //   <li key={title} style={{ color: "gray" }}>
  //     <a rel="noopener noreferrer" href={link}>
  //       {title}
  //     </a>
  //     &nbsp;-<i>{author}</i>
  //   </li>
  // )

  const {
    author,
    // occupation,
    // readingList,
    // showsList,
    designations,
    unemployed,
  } = data.site.siteMetadata

  // const bookLinks = readingList.map(book => MediaLink(book))
  // const showLinks = showsList.map(show => MediaLink(show))

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        <Image
          roundedCircle
          width="140"
          height="140"
          src={`../../icons/selfie-close.jpeg`}
          alt={author}
        />
        <article className="w-75 m-auto pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <p className="i-5 mt-4 pt-2">
            Hello there! My name is <b>{`${author}`}</b>. I am a&nbsp;
            <b>Software Engineer</b>! I graduated from the University of Massachusetts,
            Amherst with a BS in Computer Science and a BBA in Management. I have experience
            as a Software Engineer in Full Stack, Mobile App, and Game Development. I have worked
            with a number of different programming languages such as Java, C#, PHP, React,
            Javascript, SQL, and Python.
          </p>
          <p className="i-5">
          I am a hard working, highly motivated individual who has a passion
          for solving complex problems and Software Engineering as a whole. In my free time
          I enjoy creating games in Unity and learning about game design principles.
          </p>
          {/* <p className="i-5">
            Check out my <Link to="/projects">projects</Link> to see what I've
            been up to! Or check out my <Link to="/blog">blog</Link> to see
            what's recently caught my eye!
          </p> */}
        </article>
        <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  I am <b>currently looking for new opportunities</b>! If you
                  like what you <Link to="/resume">see</Link>, let's get
                  in&nbsp;
                  <a
                    href="mailto:qsmalljr@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          {/* <hr />
          <h5 className="watch-list-title pt-4">
            Here are a couple of books from my reading list:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{bookLinks}</ul>
          <h5 className="watch-list-title pt-4">
            Here are a couple of shows from my watch list:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{showLinks}</ul>
          <h5 className="watch-list-title pt-4">
            Here are a couple of movies from my watch list:
          </h5>
          <p>
            <i>...waaaay too many to list.</i>
          </p> */}
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
        readingList {
          title
          author
          link
        }
        showsList {
          title
          author
          link
        }
      }
    }
  }
`
