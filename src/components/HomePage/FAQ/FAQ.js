import './FAQ.css';

  
function FAQPage(props) {

    return (
    <div className="FAQSection">
        <section className="content">
  <div className="accordion">
    <h2>Frequently Asked Questions</h2>
    <label className="accordion__item">
      <input type="checkbox" name="accordion"/>
      <div className="accordion__title">What do you learn in this DeCal?</div>
      <div className="accordion__content">By taking our DeCal, you'll get to start out by choosing a track: iOS development or web development. All the lectures and labs for the two tracks will be separate. <br/> <br/>Then, over the course of the semester, you'll build unique, guided mini-projects every week, learn about project ideation and design, craft a project proposal, designing application mockups, develop a full-stack resume-quality web or iOS application, pitch your final project to your peers hackathon-style, and much more!</div>
    </label>
    <label className="accordion__item">
      <input type="checkbox" name="accordion"/>
      <div className="accordion__title">Are there any prerequisites?</div>
      <div className="accordion__content">The Web development track is designed for beginner developers. While Web does not enforce prereqs, prior programming experience of any kind is highly recommended!
        <br/><br/>The iOS development track is designed for intermediate and advanced programmers. We encourage those who have some experience programming to enroll. We still do allow beginner programmers to enroll in the course, but it may take extra effort to keep up with the content during the first few weeks.</div>
    </label>
    <label className="accordion__item">
      <input type="checkbox" name="accordion"/>
      <div className="accordion__title">Is there any required material?</div>
      <div className="accordion__content">If participating in the iOS track, you'll need a MacBook with macOS 10.14.3+ later that can run Xcode 11. Older Macs may run into some issues. <br/><br/>For the web track, you should be fine with nearly any laptop.</div>
    </label>
    <label className="accordion__item">
      <input type="checkbox" name="accordion"/>
      <div className="accordion__title">What is the attendance policy?</div>
      <div className="accordion__content">All of our lectures and labs will be held synchronously in person, and you'll be expected to attend lecture each week. For the iOS track, labs are optional. For the Web track, the first hour of lab is required and the second hour serves as optional OH.</div>
    </label>
    <label className="accordion__item">
      <input type="checkbox" name="accordion"/>
      <div className="accordion__title">How do I apply?</div>
      <div className="accordion__content">Go to your CalCentral Enrollment Center and search 29886 for the Web Track OR 29885 for the iOS Track.</div>
    </label>
    <label className="accordion__item">
      <input type="checkbox" name="accordion"/>
      <div className="accordion__title">How Can I Contact You?</div>
      <div className="accordion__content">We're always available to help prospective or current students! Email us at <span style={{"fontWeight":"600"}}>team@cubstart.com</span></div>
    </label>
    <label className="accordion__item">
      <input type="checkbox" name="accordion"/>
      <div className="accordion__title">Wow, this DeCal is so cool! Y'all are awesome!</div>
      <div className="accordion__content">Thanks, you're pretty cool too.</div>
    </label>
  </div>
</section>
    </div>
    );
}

export default FAQPage;