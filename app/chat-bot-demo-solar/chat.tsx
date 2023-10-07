"use client";
import React, { useEffect, useRef, useState } from "react";
import { Check, Dot, Plus, Send } from "lucide-react";
import { debounce } from "lodash";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { sendToGPT } from "./backendv2";
import { useRouter } from "next/navigation";
import "./ChatLoadingAnimation.css";

const ChatLoadingComponent = () => {
  return (
    <div
      className={cn(
        "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
        "bg-muted"
      )}
    >
      <div className="flex chat-typing-animation">
        <Dot size={16} className="p-0 m-0 lucide-Dot" />
        <Dot size={16} className="p-0 m-0 lucide-Dot" />
        <Dot size={16} className="p-0 m-0 lucide-Dot" />
      </div>
    </div>
  );
};
export default function CardsChat() {
  const [isLoading, setIsLoading] = useState(false);
  const messageContainerRef = useRef(null);
  const debouncedResponse = debounce((m: any) => getResponse(m), 3000);

  useEffect(() => {
    const queryString = window.location.search;
    const queryParams = new URLSearchParams(queryString);

    const firstMessage = queryParams.get("firstMessage");
    if (firstMessage) {
      let newMessages = [
        ...messages,
        {
          role: "user",
          content: firstMessage,
        },
      ];
      setMessages(newMessages);
      debouncedResponse(newMessages);
      setTimeout(() => {
        setIsLoading(true);
      }, 1000);
    }
  }, []);
  function getResponse(m: any) {
    sendToGPT(m).then((x) => {
      if (x) {
        setIsLoading(false);
        setMessages((m) => [
          ...m,
          {
            role: "agent",
            content: x,
          },
        ]);
      }
    });
  }
  const [messages, setMessages] = useState([
    {
      role: "agent",
      content:
        "Hi, this is Emma With ChooseSolar, i'm here to help you see if you qualify for the new government program that allows you to go solar for free. ",
    },
  ]);
  useEffect(() => {
    // Scroll to the bottom of the message container after rendering a new message
    if (messageContainerRef.current) {
      //@ts-ignore
      messageContainerRef.current.scrollTop =
        //@ts-ignore
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div className="w-[90vw] mx-auto">
      <Card>
        <CardHeader className="flex flex-row items-center">
          <div className="flex items-center space-x-4">
            <div>
              <p className="text-sm font-medium leading-none"></p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div
            ref={messageContainerRef}
            className="space-y-4 overflow-y-scroll h-[40vh]"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                  message.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                {message.content}
              </div>
            ))}
            {isLoading ? <ChatLoadingComponent /> : ""}
          </div>
        </CardContent>
        <CardFooter>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              let newMessages = [
                ...messages,
                {
                  role: "user",
                  content: event.currentTarget.message.value,
                },
              ];
              setMessages(newMessages);

              debouncedResponse(newMessages);
              setTimeout(() => {
                setIsLoading(true);
              }, 1000);
              event.currentTarget.message.value = "";
            }}
            className="flex w-full items-center space-x-2"
          >
            <Input
              autoFocus
              id="message"
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
