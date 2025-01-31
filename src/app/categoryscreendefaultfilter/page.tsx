import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "Property Search Results for Jakarta - Digital Asset Card",
  description:
    "Discover properties in Jakarta with our comprehensive search filters. Find your ideal asset from residential to commercial spaces, all with complete documentation and expert consultation.",
  //ogTitle:'...'
};

export default function CategoryScreenDefaultFilterPage() {
  return <Page />;
}
