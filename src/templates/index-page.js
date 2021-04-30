import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import CommonList from "../components/CommonList";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.png";
import rds from "../assets/img/rds.png";
import styled from "styled-components";
import authorImg from "../assets/img/ga-png.jpeg";

const aboutListData = ["Email", "Twitter", "Github", "Instagram", "LinkedIn"];

const recentPostData = [
  "Bulbasaur Pokeball Moss Terrarium",
  "Halloween 2017 Demon Gargoyle",
  "Python and the 555 Blinking Eyes in the Bushes",
  "Ingress: Dangers and First Impressions",
  "Hello World Update",
];

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
];

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
];

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
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
            </div>
          </div>

          {/* SideBar */}
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
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
