import React from "react";
import { ScrollView } from "react-native";
import Welcome from "../components/templates/Welcome";
import SearchBar from "../components/templates/SearchBar";
import SubscribeMedia from "../components/templates/SubscribeMedia";
import Explorer from "../components/templates/Explorer";
import JobList from "../components/templates/JobListing";
import RecentJob from "../components/templates/RecentJob";
import Contracts from "../components/templates/Contracts";


export default function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} vertical={true}>
      <Welcome username="Fabrice" />
      <SearchBar />
      <SubscribeMedia
        title="Twitter"
        logo="logo-twitter"
        description="Waiting to be selected by the twitter team"
      />
      <Explorer title="Suggested Jobs" />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          flexDirection: "row",
        }}
      >
        <JobList
          icon="logo-google"
          jobTitle="Google"
          jobLocation="Mountain View, CA"
          minSalary="100k"
          maxSalary="150k"
          perTime="year"
        />

        <JobList
          icon="logo-apple"
          jobTitle="Apple"
          jobLocation="Cupertino, CA"
          minSalary="100k"
          maxSalary="150k"
          perTime="year"
        />
        <JobList
          icon="logo-facebook"
          jobTitle="Facebook"
          jobLocation="Menlo Park, CA"
          minSalary="100k"
          maxSalary="150k"
          perTime="year"
        />
      </ScrollView>
      <Explorer title="Recent Job" />
      <RecentJob
        jobTitle="Senior UI Designer"
        jobLocation="Twitter . Jakatra Indonesia"
        icon="logo-twitter"
      />
      <Contracts />
    </ScrollView>
  );
}
