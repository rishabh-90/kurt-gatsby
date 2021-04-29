import * as React from "react"
import BlogPost from "../components/BlogPost"
import CommonList from "../components/CommonList"
import Layout from "../components/layout"
import ReplyForm from "../components/ReplyForm"
import img1 from "../assets/img/img1.jpg"
import img2 from "../assets/img/img2.jpg"
import img3 from "../assets/img/img3.png"
import rds from "../assets/img/rds.png"
import styled from "styled-components"
import authorImg from "../assets/img/ga-png.jpeg"
import FinalPost from "../components/FinalPost"

const PokeContentWrapper = styled.div`
  p {
  }
`
const aboutListData = ["Email", "Twitter", "Github", "Instagram", "LinkedIn"]

const recentPostData = [
  "Bulbasaur Pokeball Moss Terrarium",
  "Halloween 2017 Demon Gargoyle",
  "Python and the 555 Blinking Eyes in the Bushes",
  "Ingress: Dangers and First Impressions",
  "Hello World Update",
]

const archiveData1 = [
  "March 2020",
  "November 2017",
  "November 2012",
  "October 2012",
  "March 2012",
  "July 2011",
  "February 2011",
  "March 2010",
  "February 2010",
  "January 2010",
  "December 2009",
  "November 2009",
  "February 2009",
  "November 2008",
  "May 2008",
  "April 2008",
]

const archiveData2 = [
  "Agile",
  "Data",
  "Distributed Computing",
  "Django",
  "Education",
  "Entrepreneurship",
  "Games",
  "Local Business",
  "Machine Learning",
  "Maker",
  "Presentation",
  "Python",
  "Software Engineering",
  "Uncategorized",
]
const pokeContent = [
  `<p>Next, I needed to craft the lower-half of the pokeball. My first attempts involved 3D printing. It seemed easy enough to build some 3D models that would get me pretty close to the shape and smoothness I would need. I attempted several 3D printings, but my printer’s print bed was not large enough to accommodate the job. I attempted breaking the print up into several pieces, which did not seem to provide the stability I needed without more work.</p><p>Eventually I returned to papier-mâché. Using the planter itself, I built the lower casing out for a perfect fit. After a few coats of paint, I mounted the final model on a piece of stained wood. The casing, wood stand, and all crevices were sealed so water would not eventually wreak havoc.</p>`,
]

const blogPostData = [
  {
    image: img1,
    content: `<p>My latest crafting adventures resulted in a pokeball moss terrarium housing a small, sleeping bulbasaur. It was a fun project, which I believe also resulted in a happy recipient.</p><p>The project’s inception came about while watching family members play Pokemon Go. I began to wonder about life inside a pokeball. My first thoughts weren’t too rosy, but then I tried to imagine a larger, life-sustaining, extra-dimensional space that would be far less likely to be mistaken for animal cruelty.</p>`,
  },
  {
    image: img2,
    content: `<p>My latest crafting adventures resulted in a pokeball moss terrarium housing a small, sleeping bulbasaur. It was a fun project, which I believe also resulted in a happy recipient.</p><p>The project’s inception came about while watching family members play Pokemon Go. I began to wonder about life inside a pokeball. My first thoughts weren’t too rosy, but then I tried to imagine a larger, life-sustaining, extra-dimensional space that would be far less likely to be mistaken for animal cruelty.</p>`,
  },
]

const finalPostData = [
  {
    image: `<img src=${img3} alt="">`,
    content: `<p>While I was happy with the overall outcome for a first attempt there are a number of things I would like to address were I to do it again. The roughness of the papier-mâché pokeball continues to bug me. I would want to find a larger 3D printer or outsource the printing in order to get a base for a nice smooth pokeball. </p>`,
  },
  {
    image: `<img src=${rds} alt="">
    <p>forbidden dumpling</p>`,
    content: `<p>The bulbasaur was also pretty challenging to sculpt. My big fingers tend to make fine manipulation a bit more challenging. Sculpting would be an area I might spend more time refining next time or perhaps find someone else to assist me. </p>
    <p>In the end the recipient of the pokeball seemed pretty happy with the results, so mission accomplished.</p>`,
  },
]

const IndexPage = () => (
  <Layout>
    <div className="main-body-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="main-left">
              <div className="main-top-title">
                <h3>Bulbasaur Pokeball Moss Terrarium</h3>
                <p>
                  by <a href="!#">kurt</a> on March 4, 2020
                </p>
              </div>
              <div className="dital-box">
                {blogPostData.map((item, index) => (
                  <div
                    className={
                      index === 0 ? "single-dital" : "single-dital dital2"
                    }
                    key={index}
                  >
                    <BlogPost image={item.image} content={item.content} />
                  </div>
                ))}
              </div>
              <div className="poke-containt">
                <span>details I envisioned.</span>
                <h3>The Pokeball Casing</h3>
                <PokeContentWrapper
                  dangerouslySetInnerHTML={{ __html: pokeContent }}
                />
              </div>
              <div className="finel-area">
                <div className="finel-title">
                  <h3>Final Thoughts</h3>
                </div>
                <FinalPost finalPostData={finalPostData} />
              </div>
              <div className="LEAVE-AERA">
                <div className="leave-wrap">
                  <h3>Leave a Reply </h3>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>
                <ReplyForm />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="right-wrap">
              <div className="about-ps">
                <div className="about-text">
                  <p>About Me</p>
                </div>
                <div className="about-fx">
                  <img src={authorImg} alt="" />
                  <p>
                    I am a technologist and entrepreneur living near North
                    Carolina's Research Triangle Park where I dabble in all
                    sorts of geekery. I am currently the{" "}
                  </p>
                </div>
                <div className="about-pe">
                  <p>
                    Chief Technology Officer of Talented. I also run the
                    software consultancy Grandis Technologies.{" "}
                  </p>
                </div>
                <div className="about-list">
                  <CommonList data={aboutListData} />
                </div>
              </div>
              <div className="about-pe view">
                <p>
                  The views expressed on this blog are my own and do not
                  necessarily reflect the views and opinions of my employers and
                  clients.
                </p>
              </div>
              <div className="post-list-wrap">
                <p>Recent Posts</p>
                <div className="about-list post">
                  <CommonList data={recentPostData} />
                </div>
              </div>
              <div className="post-list-wrap post-last">
                <p>Archives</p>
                <div className="about-list post">
                  <CommonList data={archiveData1} />
                </div>
              </div>
              <div className="post-list-wrap post-last">
                <p>Archives</p>
                <div className="about-list post">
                  <CommonList data={archiveData2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
