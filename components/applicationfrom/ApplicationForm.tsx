"use client";
import { Form } from "@quillforms/renderer-core";

import "@quillforms/renderer-core/build-style/style.css";
//@ts-ignore
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import Iframe from "iframe-resizer-react";
import { useState, useEffect, useRef } from "react";
import useScript from "../useScript";
import { useMutationObserver } from "@horat1us/react-hooks";
function convertToJsonParams(jsonObject: any) {
  const params = [];

  for (const key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
      const value = jsonObject[key];

      // Encode key and value and add them to the params array

      params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
      // params.push(`${encodeURIComponent(key)}=${value}`);
    }
  }

  // Join the params array with '&' to create the final param string
  return params.join("&");
}
registerCoreBlocks();

function App({ goToBookingPage }: any) {
  const [allowBook, setAllowBook] = useState(true);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Form
        applyLogic={true}
        formId={2}
        formObj={{
          theme: {
            progressBarFillColor: "#F16B26",
            questionsColor: "white",
            // backgroundColor: "#2E4057",
            backgroundColor: "black",
            buttonsBgColor: "#F16B26",
            answersColor: "white",
          },
          blocks: [
            // {
            //   name: "welcome-screen",
            //   id: "jg1401r",

            //   attributes: {
            //     label: "Make Incredible Profits with Xentora",
            //     description: "Apply to become Growth Partner today!",
            //     attachment: {
            //       type: "image",

            //       url: "/xentora_logo.png",
            //     },
            //     layout: "stack",
            //   },
            // },
            {
              name: "short-text",
              id: "first_name",
              attributes: {
                classnames: "first-block",
                required: true,
                label: "Let's start with your First Name",
              },
            },
            {
              name: "short-text",
              id: "last_name",
              attributes: {
                classnames: "first-block",
                required: true,
                label: "What About Your Last Name?",
              },
            },
            {
              name: "short-text",
              id: "current_monthly_revenue",

              attributes: {
                classnames: "first-block",
                required: true,
                label: "What is your Current Monthly Revenue?",
              },
            },
            {
              name: "email",
              id: "email",

              attributes: {
                classnames: "first-block",
                required: true,
                label: "What's your email address?",
              },
            },
            {
              name: "multiple-choice",
              id: "referral",
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
            setAllowBook(true);

            console.log(data);

            goToBookingPage(
              convertToJsonParams({
                //@ts-ignore
                email: data.answers.email.value,
                //@ts-ignore
                first_name: data.answers.first_name.value,
                //@ts-ignore
                last_name: data.answers.last_name.value,

                current_monthly_revenue:
                  //@ts-ignore
                  data.answers.current_monthly_revenue.value,
                //@ts-ignore
                referral: data.answers.referral.value,
              })
            );
            // completeForm();
          }, 500);
        }}
      />
    </div>
  );
}
export default App;
