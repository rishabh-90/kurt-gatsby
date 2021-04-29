import React from "react"

const ReplyForm = () => {
  return (
    <form action="!#">
      <div className="comment-box">
        <label htmlFor="#">Comment</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div className="single-input">
        <label htmlFor="#">Name *</label>
        <input type="text" placeholder="" />
      </div>
      <div className="single-input">
        <label htmlFor="#">Email *</label>
        <input type="Email" placeholder="" />
      </div>
      <div className="single-input">
        <label htmlFor="#">Website</label>
        <input type="text" placeholder="" />
      </div>
      <div className="cstm-check">
        <div className="form-group">
          <input type="checkbox" id="javascript" />
          <label htmlFor="javascript">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
      </div>
      <div className="check-btn">
        <a href="!#">Post Comment</a>
      </div>
    </form>
  )
}

export default ReplyForm
