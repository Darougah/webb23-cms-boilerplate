import { storyblokEditable, renderRichText } from "@storyblok/react";

const Newsletter = ({ blok }) => {
 

  return (
    <section {...storyblokEditable(blok)} className="newsletterSection">
      <div className="container">
        <h2 className="title">{blok.title}</h2>
        <div className="richtext">{renderRichText(blok.text)}</div>
        <input
          type="email"
          className="input"
          placeholder="Enter your email"
          aria-label="Email"
        />
        <button className="button">{blok.button_label || "Subscribe"}</button>
      </div>
    </section>
  );
};

export default Newsletter;
