"use client";
import { Input } from "@/components/ui/input";
import { Metadata } from "next";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import "./funnel.css";
import "./funnel_small_screen.css";
import CTAButton from "@/components/CtaButton";
type CalculatorData = {
  revenue_goal: number;
  product_price: number;
  opportunity_to_customer_rate: number;
  qualified_lead_to_opportunity: number;
  lead_to_qualified_lead: number;
  vistor_to_lead_rate: number;
};
type CalculatorResult = {
  contacts: number;
  leads: number;
  qualified_leads: number;
  sales_calls: number;
  sales: number;
};
function ToPercentage(n: number) {
  return n / 100;
}

const calculateResult = (data: CalculatorData): CalculatorResult => {
  return {
    contacts:
      (Math.fround(data.revenue_goal / data.product_price) /
        ToPercentage(data.opportunity_to_customer_rate) /
        ToPercentage(data.qualified_lead_to_opportunity) /
        ToPercentage(data.lead_to_qualified_lead) /
        ToPercentage(data.vistor_to_lead_rate)) |
      0,

    leads:
      (Math.fround(data.revenue_goal / data.product_price) /
        ToPercentage(data.opportunity_to_customer_rate) /
        ToPercentage(data.qualified_lead_to_opportunity) /
        ToPercentage(data.lead_to_qualified_lead)) |
      0,
    qualified_leads:
      (Math.fround(data.revenue_goal / data.product_price) /
        ToPercentage(data.opportunity_to_customer_rate) /
        ToPercentage(data.qualified_lead_to_opportunity)) |
      0,
    sales_calls:
      (Math.fround(data.revenue_goal / data.product_price) /
        ToPercentage(data.opportunity_to_customer_rate)) |
      0,
    sales: Math.fround(data.revenue_goal / data.product_price) | 0,
  };
};
function page() {
  const [data, setData] = useState<CalculatorData>({
    revenue_goal: 5000,
    product_price: 1000,
    opportunity_to_customer_rate: 10,
    qualified_lead_to_opportunity: 10,
    lead_to_qualified_lead: 10,
    vistor_to_lead_rate: 10,
  });
  const [result, setResult] = useState(calculateResult(data));
  useEffect(() => {
    setResult((_c: CalculatorResult) => {
      return {
        contacts:
          (Math.fround(data.revenue_goal / data.product_price) /
            ToPercentage(data.opportunity_to_customer_rate) /
            ToPercentage(data.qualified_lead_to_opportunity) /
            ToPercentage(data.lead_to_qualified_lead) /
            ToPercentage(data.vistor_to_lead_rate)) |
          0,

        leads:
          (Math.fround(data.revenue_goal / data.product_price) /
            ToPercentage(data.opportunity_to_customer_rate) /
            ToPercentage(data.qualified_lead_to_opportunity) /
            ToPercentage(data.lead_to_qualified_lead)) |
          0,
        qualified_leads:
          (Math.fround(data.revenue_goal / data.product_price) /
            ToPercentage(data.opportunity_to_customer_rate) /
            ToPercentage(data.qualified_lead_to_opportunity)) |
          0,
        sales_calls:
          (Math.fround(data.revenue_goal / data.product_price) /
            ToPercentage(data.opportunity_to_customer_rate)) |
          0,
        sales: Math.fround(data.revenue_goal / data.product_price) | 0,
      };
    });
  }, [data]);
  return (
    <div>
      <div>
        <div>
          <div className=" w-[90%] mx-auto mb-10 reverse_funnel_calculator">
            <div className="grid  sm:grid-cols-2 gap-x-20 ">
              <div className="  space-y-10 flex-2">
                <div className="space-y-5">
                  <Label>Revenue Goal</Label>
                  <Input
                    value={data?.revenue_goal}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setData((value) => {
                        return {
                          ...value,
                          revenue_goal: parseFloat(e.target.value),
                        };
                      });
                    }}
                    type="number"
                  ></Input>
                </div>
                <div className="space-y-5">
                  <Label>Average Revenue Per Client</Label>
                  <Input
                    value={data?.product_price}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setData((value) => {
                        return {
                          ...value,
                          product_price: parseFloat(e.target.value),
                        };
                      });
                    }}
                    type="number"
                  ></Input>
                </div>
                <div className="space-y-5">
                  <Label>Visitor / Contact to Lead Rate %</Label>
                  <Input
                    value={data?.vistor_to_lead_rate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setData((value) => {
                        return {
                          ...value,
                          vistor_to_lead_rate: parseFloat(e.target.value),
                        };
                      });
                    }}
                    type="number"
                  ></Input>{" "}
                  <div className="space-y-5">
                    <Label>Lead to Qualified Lead Rate %</Label>
                    <Input
                      value={data?.lead_to_qualified_lead}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setData((value) => {
                          return {
                            ...value,
                            lead_to_qualified_lead: parseFloat(e.target.value),
                          };
                        });
                      }}
                      type="number"
                    ></Input>
                  </div>{" "}
                  <div className="space-y-5">
                    <Label>Qualified Lead to Opportunity Rate %</Label>
                    <Input
                      value={data?.qualified_lead_to_opportunity}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setData((value) => {
                          return {
                            ...value,
                            qualified_lead_to_opportunity: parseFloat(
                              e.target.value
                            ),
                          };
                        });
                      }}
                      type="number"
                    ></Input>
                  </div>
                </div>
                <div className="space-y-5">
                  <Label>Opportunity to Customer Rate %</Label>
                  <Input
                    value={data?.opportunity_to_customer_rate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setData((value) => {
                        return {
                          ...value,
                          opportunity_to_customer_rate: parseFloat(
                            e.target.value
                          ),
                        };
                      });
                    }}
                    type="number"
                  ></Input>
                </div>
              </div>
              <div className="flex-column my-10 sm:my-0 flex-1  mx-auto flex items-start justify-start">
                <h3 className="font-black text-5xl my-10">Results:</h3>
                <div>
                  <ul className="text-white sm:text-2xl font-extrabold">
                    <li> {`${result.contacts}`} Contacts</li>
                    <li> {`${result.leads}`} Leads</li>
                    <li> {`${result.qualified_leads}`} QL</li>
                    <li> {`${result.sales_calls}`} Calls</li>
                    <li>{`${result.sales}`} Sales</li>
                  </ul>
                  <div>
                    <h3 className="font-bold text-5xl my-10">Your Targets</h3>
                    <p className="font-bold m-10">
                      Leads to contact Daily:{" "}
                      {`${Math.round(result.contacts / 30)}`}{" "}
                    </p>{" "}
                    <p className="font-bold m-10">
                      Daily Replies: {`${Math.round(result.leads / 30)}`}{" "}
                    </p>
                    <p className="font-bold m-10">
                      Positive Reply Every X Days:{" "}
                      {`${Math.round(result.qualified_leads / 30)}`}{" "}
                    </p>
                    <p className=" font-bold m-10">
                      Sales Call Every X Days:{" "}
                      {`${Math.round(result.sales_calls / 30)}`}{" "}
                    </p>
                  </div>{" "}
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default page;
