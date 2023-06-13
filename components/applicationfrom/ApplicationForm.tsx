"use client";
import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
//@ts-ignore
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import Router from "next/navigation";
import { useRouter } from "next/router";
registerCoreBlocks();
function App({ goToBookingPage }: any) {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Form
        applyLogic={true}
        formId={2}
        formObj={{
          theme: {
            progressBarFillColor: "#F16B26",
            questionsColor: "white",
            backgroundColor: "#2E4057",
            buttonsBgColor: "#F16B26",
            answersColor: "white",
          },
          blocks: [
            {
              name: "welcome-screen",
              id: "jg1401r",

              attributes: {
                label: "Make Incredible Profits with Xentora",
                description: "Apply to become Growth Partner today!",
                attachment: {
                  type: "image",

                  url: "/xentora_logo.png",
                },
                layout: "stack",
              },
            },
            {
              name: "short-text",
              id: "kd12edg",
              attributes: {
                classnames: "first-block",
                required: true,
                label: "Let's start with your name",
              },
            },
            {
              name: "email",
              id: "kd12adg",

              attributes: {
                classnames: "first-block",
                required: true,
                label: "What's your email address?",
              },
            },

            {
              name: "multiple-choice",
              id: "gqr1294c",
              attributes: {
                required: true,
                multiple: false,
                verticalAlign: false,
                label: "How Did You Find Out About us?",
                choices: [
                  {
                    label: "Email",
                    value: "email",
                  },
                  {
                    label: "LinkedIn",
                    value: "linkedin",
                  },
                  {
                    label: "Twitter",
                    value: "twitter",
                  },
                  {
                    label: "Youtube",
                    value: "youtube",
                  },
                ],
              },
            },
          ],
        }}
        onSubmit={(
          data,
          { completeForm, setIsSubmitting, goToBlock, setSubmissionErr }
        ) => {
          setTimeout(() => {
            setIsSubmitting(false);
            goToBookingPage();
            // completeForm();
          }, 500);
        }}
      />
    </div>
  );
}
export default App;
