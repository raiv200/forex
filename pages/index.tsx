import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Service from "../components/Service";
import CTASection from "../components/CTASection";
import DetailsSection from "../components/DetailsSection";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ChooseAccounts from "../components/ChooseAccounts";
import DataFigureSection from "../components/DataFigureSection";

const Home: NextPage = () => {
  return (
    <div className=" min-w-full">
      <Head>
        <title>Kerjho Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />
      {/* Header Section  */}

      <HeroSection />

      {/* Deposit and withdrawal  Section */}
      <Pricing />

      {/* Details  Section  */}
      <DetailsSection />

      {/*  Access And Trade Section */}
      <Service />

      {/*  Choose Accounts  Section */}
      <ChooseAccounts />
      {/*  Data Figures Section */}
      <DataFigureSection  />

      {/* CTA Section */}
      <CTASection />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
