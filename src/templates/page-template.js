import Layout from "@components/layout";
import SEO from "@components/seo/seo";
import React from "react";

const PageTemplate = (props) => {
  const {
    frontmatter: { title, description },
  } = props.pageContext;

  return (
    <Layout>
      {/* TODO(abhith): remove hard coded slug */}
      <SEO title={title} description={description} slug="/donate" />
      <section className="section is-medium">
        <div className="container">
          <h1 className="title spanborder has-text-weight-bold">
            <span> {title}</span>
          </h1>
          <div className="page-content content">{props.children}</div>
        </div>
      </section>
    </Layout>
  );
};

export default PageTemplate;
