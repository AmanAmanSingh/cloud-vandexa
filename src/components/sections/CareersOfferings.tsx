export default function CareersOfferings() {
  return (
    <section className="px-4 py-16 max-w-7xl mx-auto space-y-12">
      {/* Why You Might Love It Here Section */}
      <div>
        <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-8">
          Why You Might Love It Here
        </h3>
        <ul className="pl-6 space-y-3 text-base md:text-lg">
          <li>
            <span className="h-2 w-2 ml-6 rounded-full bg-black mr-8 inline-block"></span>
            <span className="font-bold">People First:</span> We care about you
            as a person — not just as a professional.
          </li>
          <li>
            <span className="h-2 w-2 ml-6 rounded-full bg-black mr-8 inline-block"></span>
            <span className="font-bold">Room to Grow:</span> Whether you're just
            starting or ready for your next leap, we're here to help you grow.
          </li>
          <li>
            <span className="h-2 w-2 ml-6 rounded-full bg-black mr-8 inline-block"></span>
            <span className="font-bold">Meaningful Work:</span> Work on real
            projects that make a real difference.
          </li>
          <li>
            <span className="h-2 w-2 ml-6 rounded-full bg-black mr-8 inline-block"></span>
            <span className="font-bold">Flexible & Remote-Friendly:</span> Work
            where you're happiest and most productive.
          </li>
          <li>
            <span className="h-2 w-2 ml-6 rounded-full bg-black mr-8 inline-block"></span>
            <span className="font-bold">Kindness is Our Culture:</span> We lead
            with empathy, always.
          </li>
        </ul>
      </div>

      {/*Google form */}
      <div className="max-w-7xl mx-auto mb-28">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          Job Application Form
        </h2>
        <p className="mb-6">Please fill in the following details to apply:</p>
        <div className="w-full">
          {/* Replace the src URL below with your actual Google Form embed link */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScxQ0Z9mwDh9BQ6ZIwY9wPRQPX1Y3RjCXzhl55VaqR73MTL5A/viewform?usp=dialog"
            width="100%"
            height="1200"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Job Application Form"
          >
            Loading…
          </iframe>
        </div>
      </div>

      {/* Let's Connect Section */}
      <div>
        <h3 className="font-bold text-3xl mb-4">Let's Connect</h3>
        <h2 className="text-2xl md:text-4xl font-extrabold mb-8">
          We believe talent isn’t one-size-fits-all — and that’s what makes it
          powerful.
        </h2>
        <p className="text-base md:text-lg tracking-wide mb-12">
          At CloudVandexa, we welcome those who think differently, care deeply,
          and dream boldly. Whether you’re a builder, a thinker, or something
          beautifully in between, there’s a place for you here. If our values
          speak to you, that’s already a meaningful beginning — and we’d love to
          see where this journey could take us, together.
        </p>
      </div>
    </section>
  );
}
