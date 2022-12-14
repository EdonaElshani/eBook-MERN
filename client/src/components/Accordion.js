import React from "react";

const Accordion = () => {
  return (
    <div className="container py-4">
      <h5 className="pb-4 text-center">Frequently Asked Questions</h5>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Do I need special software or hardware to read eBooks?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                All you need is your PC, laptop or hand held device and the free
                Reader software. We offer eBooks in three different formats: PDF
                download, EPUB download and Online Reader. Our Online Reader
                requires no software other than an internet browser. For
                downloading, we will provide you with a link to download the
                appropriate Reader software free of charge when you make a
                purchase.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Can I print and copy my ebooks?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                eBooks have DRM security settings that may prevent (or limit)
                printing and copying of some ebooks. These are set by the
                Publisher and vary from ebook to ebook, and even from format to
                format for the same ebook. You can view the security settings
                for each title by clicking the "Print & copy permissions" link
                below the "Add to cart" button on the ebook product page.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Will I be able to view my eBooks offline using the Ebook Reader
              for iOS and Android?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>
                Yes. You just need to sync with your bookshelf and download the
                ebook the first time. Once the ebook is downloaded onto your
                device, you can read them offline anytime anywhere!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
