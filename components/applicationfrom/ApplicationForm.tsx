"use client";
import { Form } from "@quillforms/renderer-core";

import "@quillforms/renderer-core/build-style/style.css";
//@ts-ignore
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import Iframe from "iframe-resizer-react";
import { useState, useEffect, useRef } from "react";
import useScript from "../useScript";
import { useMutationObserver } from "@horat1us/react-hooks";
import { Button } from "@quillforms/admin-components";
import "./phoneBlock";
function convertToJsonParams(jsonObject: any) {
  const params = [];

  for (const key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
      const value = jsonObject[key];

      // Encode key and value and add them to the params array

      params.push(`${encodeURIComponent(key)}=${value}`);
      // params.push(`${encodeURIComponent(key)}=${value}`);
    }
  }

  // Join the params array with '&' to create the final param string
  return params.join("&");
}
registerCoreBlocks();

function App({
  sendApplication,
  goToBookingPage,
  goToThankYouPage,
  width,
  height,
}: any) {
  const [allowBook, setAllowBook] = useState(true);
  const [showFirstBlock, setShowFirstBlock] = useState(true);

  useEffect(() => {
    const url = new URL(window.location.href);
    let FirstBlock = true;
    if (url.searchParams.has("disableFirstBlock")) {
      FirstBlock = false;
    }

    setShowFirstBlock(FirstBlock);
  }, []);
  const removeFirstBlock = (myList: any, TrueOrFalse: boolean) => {
    //return the list without the first item
    // if (TrueOrFalse) return myList;
    return myList.slice(1);
  };
  const unpackList = (arr: any) => {
    return arr[0];
  };
  // const [showFirstBlock, setShowFirstBlock] = useState(true);
  // useEffect(() => {}, []);
  return (
    <div style={{ width, height }}>
      <Form
        applyLogic={true}
        formId={2}
        formObj={{
          theme: {
            progressBarFillColor: "#38a169",
            questionsColor: "black",
            // backgroundColor: "#2E4057",
            backgroundColor: "transparent",
            buttonsBgColor: "#38a169",
            answersColor: "black",
          },
          blocks: removeFirstBlock(
            [
              [
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
              ],

              {
                name: "short-text",
                id: "first_name",
                attributes: {
                  classnames: "first-block",
                  required: true,
                  label: "Let's start with your First Name",
                  // attachment: {
                  //   type: "image",

                  //   url: "/xentora_logo.png",
                  // },
                  // layout: "float-right",
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
                name: "multiple-choice",
                id: "fulltime_agent",

                attributes: {
                  classnames: "first-block",
                  required: true,
                  label: "Are You A Fulltime Agent ?",
                  choices: [
                    {
                      label: "Yes",
                      value: "Yes",
                    },
                    {
                      label: "No",
                      value: "No",
                    },
                  ],
                },
              },
              {
                name: "short-text",
                id: "market_and_city",
                attributes: {
                  classnames: "first-block",
                  required: true,
                  label: "What Market & City Do You Serve?",
                  description: "City Followed By State ie : Miami, FL",
                },
              },
              {
                name: "multiple-choice",
                id: "transactions_last_year",

                attributes: {
                  classnames: "first-block",
                  required: true,
                  label:
                    "How many Transactions did your Real Estate Business Close in the last 12 Months ?",
                  choices: [
                    {
                      label: "0 - 5",
                      value: "0 - 5",
                    },
                    {
                      label: "5 - 10",
                      value: "5 - 10",
                    },
                    {
                      label: "15 - 20",
                      value: "15 - 20",
                    },
                    {
                      label: "20+",
                      value: "20+",
                    },
                  ],
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
                name: "phone",
                id: "phone",
                attributes: {
                  classnames: "first-block",
                  required: true,
                  label: "What's the best number to reach you at? ",
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
              // {
              //   name: "slider",
              //   id: "change",
              //   attributes: {
              //     description: "How Bad Do You Want To Change Your Situation",
              //     label: "How Commited Are You To Change?",
              //     // "min":  number; // Default: 0
              //     // "max":  number; // Default: 100
              //     // "step": number; // Default: 10
              //     suffix: "%",
              //     // "prefix": string; // Default: ""
              //     // "suffix": string; // Default: ""
              //   },
              // },
            ],
            showFirstBlock
          ),
        }}
        onSubmit={(
          data,
          { completeForm, setIsSubmitting, goToBlock, setSubmissionErr }
        ) => {
          setTimeout(() => {
            setIsSubmitting(false);
            // setAllowBook(true);

            const formAnswers = {
              //@ts-ignore
              email: data.answers.email.value,
              //@ts-ignore
              first_name: data.answers.first_name.value,
              //@ts-ignore
              last_name: data.answers.last_name.value,
              //@ts-ignore
              phone: data.answers.phone.value,
              transactions_last_year:
                //@ts-ignore
                data.answers.transactions_last_year.value[0],
              //@ts-ignore
              market_and_city: data.answers.market_and_city.value,
              //@ts-ignore
              fulltime_agent: data.answers.fulltime_agent.value[0],
              // //@ts-ignore
              // change: data.answers.change.value,
              //@ts-ignore
              referral: data.answers.referral.value[0],
            };

            console.log(formAnswers);

            //@ts-ignore
            if (data.answers.transactions_last_year.value == "0 - 10k") {
              //submit to retable
              sendApplication({ ...formAnswers, qualification: "Unqualified" });
              goToThankYouPage(convertToJsonParams(formAnswers));
              return;
            }
            sendApplication({ ...formAnswers, qualification: "Qualified" });
            goToBookingPage(convertToJsonParams(formAnswers));

            // completeForm();
          }, 500);
        }}
      />
    </div>
  );
}
export default App;
