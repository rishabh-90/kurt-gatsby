import React from "react"
import styled from "styled-components"
const PostContentWrapper = styled.div`
  p {
  }
`
const ImgWrapper = styled.div`
  p {
  }
`
const FinalPost = props => {
  return (
    <>
      {props.finalPostData.map((item, index) => (
        <React.Fragment key={index}>
          {index === 0 ? (
            <div className="finel-f1 d-md-flex" key={index}>
              <div className="finel-fl-img">
                <ImgWrapper dangerouslySetInnerHTML={{ __html: item.image }} />
              </div>
              <div className="finel-text ml-md-3">
                <PostContentWrapper
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            </div>
          ) : (
            <div className="finel-f1 d-md-flex" key={index}>
              <div className="finel-text tr2">
                <PostContentWrapper
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
              <div className="finel-fl-img itr2">
                <ImgWrapper dangerouslySetInnerHTML={{ __html: item.image }} />
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </>
  )
}

export default FinalPost
