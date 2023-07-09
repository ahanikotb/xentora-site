// import { cn } from "@/lib/utils";
// import { useTheme, useMessages } from "@quillforms/renderer-core";
// import { E164Number } from "libphonenumber-js/types";
// import { forwardRef } from "react";
// import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
// import "react-phone-number-input/style.css";

// function DisplayComponent({
//   id,
//   next,
//   attributes,
//   setIsValid,
//   setIsAnswered,
//   setValidationErr,
//   showNextBtn,
//   blockWithError,
//   val,
//   setVal,
//   showErrMsg,
// }: any) {
//   const theme = useTheme();
//   const { required, start, end } = attributes;
//   const messages = useMessages();
//   return (
// <PhoneInput
//   className={cn("my-10")}
//   // value={data.phone}
//   // style={{
//   //   background: "white",
//   // }}
//   inputComponent={customInput}
//   // inputComponent={customInput}
//   placeHolder="Enter Your Phone Number"
//   onChange={function (value?: E164Number | undefined): void {
//     throw new Error("Function not implemented.");
//   }} // onChange={(value: any) => {
//   //   setData({ ...data, phone: value });
//   // }}
// />
//     // <input
//     //   type="text"
//     //   value={val}
//     //   onChange={(e) => {
//     //     const value = e.target.value;
//     //     const { required } = attributes;

//     //     setVal(parseInt(value));
//     //     showErrMsg(false);

//     //     if (value) {
//     //       setIsAnswered(true);
//     //       showNextBtn(true);
//     //       setIsValid(true);
//     //       setValidationErr(null);
//     //     } else {
//     //       setIsAnswered(false);
//     //       showNextBtn(false);
//     //       if (required) {
//     //         setIsValid(false);
//     //         setValidationErr("The field is required!");
//     //       }
//     //     }
//     //   }}
//   ); // This is just an example. Please see the full example on Codesandbox in the link below.
// }

// export default DisplayComponent;
// const customInput = forwardRef<HTMLInputElement>((props, ref) => (
//   <input style={{ background: "rgb(243,244,246)" }} ref={ref} {...props} />
// ));

import { useMessages, useBlockTheme } from "@quillforms/renderer-core";

import { useState, useEffect, forwardRef } from "react";

import tinyColor from "tinycolor2";
import { css } from "emotion";
import classnames from "classnames";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "./phone.css";
import { cn } from "@/lib/utils";

const PhoneNumberInput = (props: any) => {
  const {
    id,
    attributes,
    setIsValid,
    setIsAnswered,
    next,
    setValidationErr,
    showNextBtn,
    blockWithError,
    val,
    setVal,
    showErrMsg,
    inputRef,
    isTouchScreen,
    setFooterDisplay,
    isPreview,
    isReviewing,
  } = props;
  const messages = useMessages();
  const theme = useBlockTheme(attributes.themeId);
  const answersColor = tinyColor(theme.answersColor);

  const {
    minCharacters,
    maxCharacters,
    setMaxCharacters,
    required,
    placeholder,
  } = attributes;

  const checkfieldValidation = (value: any) => {
    if (value && value !== "") {
      if (isValidPhoneNumber(value)) {
        setIsValid(true);
        setValidationErr(null);
      } else {
        setIsValid(false);
        setValidationErr("Please Correct Number Format");
      }
    }
    if (value === undefined && required === false) {
      setIsValid(true);
      setValidationErr(null);
    }
    if (value === undefined && required === true) {
      setIsValid(false);
      setValidationErr(messages["label.errorAlert.required"]);
    }
    // if (value.length >= 5) {
    //   if (isValidPhoneNumber(value)) {
    //     setIsValid(true);
    //     setValidationErr(null);
    //   } else {
    //     setIsValid(false);
    //     setValidationErr("Please Correct Number Format");
    //   }
    // }
    // if (required === true && (!value || value === "")) {
    //   setIsValid(false);
    //   setValidationErr(messages["label.errorAlert.required"]);
    // } else if (
    //   setMaxCharacters &&
    //   maxCharacters > 0 &&
    //   value?.length > maxCharacters
    // ) {
    //   setIsValid(false);
    //   setValidationErr(messages["label.errorAlert.maxCharacters"]);
    // } else if (
    //   minCharacters !== false &&
    //   minCharacters > 0 &&
    //   value?.length < minCharacters
    // ) {
    //   setIsValid(false);
    //   setValidationErr(messages["label.errorAlert.minCharacters"]);
    // } else {
    //   setIsValid(true);
    //   setValidationErr(null);
    // }
  };

  const changeHandler = (e: any) => {
    const value = e;
    setVal(value);
    checkfieldValidation(value);

    // if (setMaxCharacters && maxCharacters > 0 && value.length > maxCharacters) {
    //   blockWithError(messages["label.errorAlert.maxCharacters"]);
    // } else {
    //   setVal(value);
    //   showErrMsg(false);
    //   checkfieldValidation(value);
    // }
    // if (value && value !== "") {
    //   setIsAnswered(true);
    //   showNextBtn(true);
    // } else {
    //   setIsAnswered(false);
    // }
  };

  return (
    <PhoneInput
      ref={inputRef}
      placeholder="Enter Your Phone Number"
      //   placeholder={
      //     placeholder === false
      //       ? messages["block.shortText.placeholder"]
      //       : placeholder
      //   }
      onChange={changeHandler}
      //   value={inputAnswer}
      onFocus={() => {
        if (isTouchScreen) {
          setFooterDisplay(false);
        }
      }}
      className={cn(
        classnames(
          css`
            & {
              width: 100%;
              border: none !important;
              border-radius: 0 !important;
              outline: none;
              padding-bottom: 8px;
              background: transparent;
              transition: box-shadow 0.1s ease-out 0s;
              box-shadow: ${answersColor.setAlpha(0.3).toString()} 0px 1px !important;
            }

            &::placeholder {
              opacity: 0.3;
              /* Chrome, Firefox, Opera, Safari 10.1+ */
              color: ${theme.answersColor};
            }

            &:-ms-input-placeholder {
              opacity: 0.3;
              /* Internet Explorer 10-11 */
              color: ${theme.answersColor};
            }

            &::-ms-input-placeholder {
              opacity: 0.3;
              /* Microsoft Edge */
              color: ${theme.answersColor};
            }

            &:focus {
              box-shadow: ${answersColor.setAlpha(1).toString()} 0px 2px !important;
            }

            color: ${theme.answersColor} !important;
          `
        )
      )}
      onBlur={() => {
        if (isTouchScreen) {
          setFooterDisplay(true);
        }
      }}
      autoComplete="off"
    />
  );
};

export default PhoneNumberInput;
