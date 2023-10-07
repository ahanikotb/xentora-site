import CTAButton from "@/components/CtaButton";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Metadata } from "next";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

// const splitMarkdownIntoPages = (markdown: String) => {
//   const isLargeScreen = window.innerWidth >= 1024; // Adjust the screen width threshold as needed
//   const lines = markdown.split("\n");
//   let newMarkdown = "";
//   let currentPage = 1;

//   for (let i = 0; i < lines.length; i++) {
//     const line = lines[i];

//     // Check if the line is an h1 heading
//     if (/^#\s/.test(line)) {
//       // Add a Page Break marker after the h1 heading
//       newMarkdown += line + "\n<!-- Page Break -->\n";
//       currentPage++;
//     } else {
//       // Keep the line as is
//       newMarkdown += line + "\n";
//     }

//     // Insert a Page Break marker for large screens if currentPage is even
//     if (isLargeScreen && currentPage % 2 === 0) {
//       newMarkdown += "<!-- Page Break -->\n";
//       currentPage++;
//     }
//   }

//   return newMarkdown;
// };
function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      <div className="mb-20 mt-5">
        <h1 className="pb-10 text-6xl text-center font-black ">
          Reverse Funnel Calculator
        </h1>
        <div className="text-2xl text-center  mx-auto sm:w-[50%]">
          Calculate the exact amount of contacts and outreach you need to do in
          order to hit your revenue goal with our Reverse Funnel Calculator.
        </div>
      </div>
      {children}
      <div className="sm:grid sm:grid-cols-2 ">
        {text.split("<!-- Page Break -->").map((page, index) => (
          <ReactMarkdown
            children={page}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            className=" pt-10 prose-strong:font-bold  sm:leading-[2rem] font-sans prose-h1:text-4xl prose-h2:text-3xl  prose sm:prose-4xl sm:prose-h1:text-5xl w-[90vw]  sm:w-[70vw] mx-auto mb-10 text-black "
          />
        ))}
      </div>{" "}
      <section
        style={{
          backgroundImage:
            "url(http://www.transparenttextures.com/patterns/textured-paper.png)",
          // background: "rgba(0, 0,30, 1)", //"rgba(0, 0,0, 0.2)",
        }}
        className="my-10 w-[95%] sm:w-[70%] p-2 py-6 mx-auto rounded-lg"
      >
        <h1 className="font-black text-4xl sm:text-5xl text-black text-center">
          WANT TO TALK TO SOMEONE ?
        </h1>
        <h3 className="text-center text-2xl text-black mt-2">
          Our lead generation specialists are available to answer your questions
          💬
        </h3>
        <CTAButton
          additionalClasses={"mt-5 sm:p-0"}
          href="/easy-book"
          // href="/start"
          CTA="Free Growth Strategy Call"
        ></CTAButton>
      </section>
      <Footer />
    </div>
  );
}
const text = `
# Reverse Funnel Calculator Explained

In today's fast-paced business landscape, reaching revenue targets and sealing the deal can feel like a never-ending rollercoaster ride. But guess what? There's a secret weapon in town that all the smart marketers and entrepreneurs are raving about—the Reverse Funnel Calculator. In this article, we're not just going to break down the nuts and bolts of this nifty tool, but we'll also chat about why it's the secret sauce for your business success. So, let's take a casual stroll through the world of the Reverse Funnel Calculator!

## **Meet the Reverse Funnel Calculator**

So, what's this Reverse Funnel Calculator thing, you ask? Well, it's like having a superhero sidekick for your sales and marketing efforts. It takes a good look at the gears and levers in your sales funnel. Here's what it wants to know:

1. **Revenue Goal**: First off, you've got to have a target. This is your "dream" revenue—what you want to rake in over a certain period.
2. **Product Price**: How much moolah does your product or service go for? Knowing this helps you figure out how many sales you need to hit that revenue bullseye.
3. **Opportunity-to-Customer Rate**: This one's a game-changer. It's the percentage of potentials (those lurking in your sales pipeline) that actually turn into paying customers. A peek into your conversion prowess.
4. **Qualified Lead-to-Opportunity Rate**: Not all leads are created equal. This rate shows how many of your "cream of the crop" leads graduate to become full-fledged opportunities. It's like sorting the wheat from the chaff.
5. **Lead-to-Qualified Lead Rate**: Wondering how many leads you need to fish out to land a specific number of qualified leads? This rate's got your back.
6. **Visitor-to-Lead Rate**: Before you reel them in as leads, you've got to lure them in as visitors. This rate tells you how well your website or landing page is doing just that.
<!-- Page Break -->
## **Why You Should Get Cozy with the Reverse Funnel Calculator**

Now that you're on first-name terms with the inputs, let's chat about why this calculator is your BFF in the world of business:

1. **Plot Your Master Plan**: Think of the calculator as your treasure map. Plug in your revenue goal and product price, and it'll lay out a step-by-step strategy to get there.
2. **Smart Resource Allocation**: No more throwing darts in the dark. Your conversion rates (like opportunity-to-customer, qualified lead-to-opportunity, and others) help you pinpoint where to invest your resources for max impact.
3. **Realistic Dreaming**: Dream big, but dream smart. The calculator makes sure your revenue goals aren't just wishful thinking but rooted in hard data.
4. **Boost Those Conversion Rates**: Now that you know your conversion rates, you can roll up your sleeves and work on improving each stage of your sales funnel. More opportunities, more qualified leads, more sales—cha-ching!
5. **Money Talks**: Efficient resource use isn't just about making your CFO happy; it's about saving cash while increasing your chances of hitting the jackpot.



In a nutshell, the Reverse Funnel Calculator is the secret recipe for businesses that want to supercharge their sales and revenue. Understanding how it ticks and why it's your best buddy in the business world will help you make informed decisions, super-charge your sales funnel, and make those revenue goals a reality. So, if you're ready to unlock the doors to success in your business, give the Reverse Funnel Calculator a spin. After all, the journey to success is in the details, and this tool is your trusty GPS.
`;
export default layout;
export const metadata: Metadata = {
  title: "Reverse Funnel Calculator | Xentora | Marketing Agency",
  description:
    "Calculate the exact amount of contacts and outreach you  need to do in order to hit your revenue goal with our Reverse Funnel Calculator.",
  openGraph: {
    title: "Reverse Funnel Calculator | Xentora | Marketing Agency",
    description:
      "Calculate the exact amount of contacts and outreach you  need to do in order to hit your revenue goal with our Reverse Funnel Calculator.",
  },
};
