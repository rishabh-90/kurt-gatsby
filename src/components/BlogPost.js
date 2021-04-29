import React from "react"
import styled from "styled-components"
const TextWrapper = styled.div`
  p {
  }
`

const BlogPost = props => {
  return (
    <>
      <img src={props.image} alt="blog-img" />
      <div className="single-dital-text">
        <TextWrapper dangerouslySetInnerHTML={{ __html: props.content }} />
      </div>
    </>
  )
}
export default BlogPost
