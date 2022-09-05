import './FAQ.css';

  
function FAQPage(props) {

    return (
    <div className="FAQSection">
        <section class="content">
  <div class="accordion">
    <h2>Frequently Asked Questions</h2>
    <label class="accordion__item">
      <input type="checkbox" name="accordion"/>
      <div class="accordion__title">What do you learn in this DeCal?</div>
      <div class="accordion__content">By taking our DeCal, you'll get to start out by choosing a track: iOS development or web development. All the labs and many of the lectures for the two tracks will be separate. <br/> <br/>Then, over the course of the semester, you'll build unique, resume-quality guided projects every week, learn about project ideation, crafting a project proposal, designing application mockups, developing full-stack web or iOS applications, pitching your final project to experts and professionals, and much more!</div>
    </label>
    <label class="accordion__item">
      <input type="checkbox" name="accordion"/>
      <div class="accordion__title">Are there any prerequisites?</div>
      <div class="accordion__content">The Web development track is designed for beginners to programming. Prior experience in programming will help, but isn't needed!
        <br/><br/>The iOS development track is designed for intermediate and advanced programmers. We encourage those who have some experience programming to enroll. We still do allow beginner programmers to enroll in the course, but it may take extra effort to keep up with the content during the first few weeks.</div>
    </label>
    <label class="accordion__item">
      <input type="checkbox" name="accordion"/>
      <div class="accordion__title">Is there any required material?</div>
      <div class="accordion__content">If participating in the iOS track, you'll need a MacBook with macOS 10.14.3+ later that can run Xcode 11. Older Macs may run into some issues. <br/><br/>For the web track, you should be fine with nearly any laptop.</div>
    </label>
    <label class="accordion__item">
      <input type="checkbox" name="accordion"/>
      <div class="accordion__title">What is the attendance policy?</div>
      <div class="accordion__content">All of our lectures and labs will be held synchronously in person, and you'll be expected to attend lecture each week. Lab is optional, and serve as office hours for the homework or project.</div>
    </label>
    <label class="accordion__item">
      <input type="checkbox" name="accordion"/>
      <div class="accordion__title">How do I apply?</div>
      <div class="accordion__content">Applications are closed for Fall 2022 unfortunately, but feel free to browse through our lecture materials and resources.</div>
    </label>
    <label class="accordion__item">
      <input type="checkbox" name="accordion"/>
      <div class="accordion__title">Wow, this DeCal is so cool! Y'all are awesome!</div>
      <div class="accordion__content">Thanks, you're pretty cool too.</div>
    </label>
  </div>
</section>
    </div>
    );
}

export default FAQPage;
