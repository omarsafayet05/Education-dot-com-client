import React from "react";
import faqStyle from "./FAQ.module.css";

const FAQ = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-cyan-500">
        Frequently Asked Questions
      </h1>

      <ul className={faqStyle.accordion}>
        <li>
          <input type="radio" name="accordion" id="first" checked />
          <label className={faqStyle.Label} for="first">
            What is Education.com?
          </label>
          <div className={faqStyle.content}>
            <p>
              Education.com is working to bring together the best available
              content across many subjects and distribute it in an engaging and
              useful way to learners worldwide.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="second" />
          <label className={faqStyle.Label} for="second">
            Can i get credit for these courses?
          </label>
          <div className={faqStyle.content}>
            <p>No – but feel free to learn as much as you'd like.</p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="third" />
          <label className={faqStyle.Label} for="third">
            Can I download copies of letures?
          </label>
          <div className={faqStyle.content}>
            <p>
              Yes, when the "Download" option appears you can download a
              QuickTime version of the lecture. Just right click on the
              "Download" link and select "Save Target Asâ€¦" or the equivalent
              for your browser.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="fourth" />
          <label className={faqStyle.Label} for="fourth">
            I remember seeing a certain lecture on the site,but I can't find
            now.Why is that?
          </label>
          <div className={faqStyle.content}>
            <p>
              We rarely remove lectures or courses from the site, but
              occasionally we need to do so due to copyright considerations or
              special requests from the institutions producing the content. We
              apologize for the inconvenience this causes when it does happen.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FAQ;
