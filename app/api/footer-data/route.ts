import { NextResponse } from "next/server";

const footerData = {
    brand: {
        name: "LeaveFlow",
        tagline:    "Effortless leave tracking with seamless approvals.",
        socialLinks: [
            {
                icon: "/images/home/footerSocialIcon/twitter.svg",
                dark_icon: "/images/home/footerSocialIcon/twitter_dark.svg",
                link: "https://twitter.com"
            },
            {
                icon: "/images/home/footerSocialIcon/linkedin.svg",
                dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
                link: "https://linkedin.com/in"
            },
            {
                icon: "/images/home/footerSocialIcon/dribble.svg",
                dark_icon: "/images/home/footerSocialIcon/dribble_dark.svg",
                link: "https://dribbble.com"
            },
            {
                icon: "/images/home/footerSocialIcon/instagram.svg",
                dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
                link: "https://instagram.com"
            }
        ]
    },
    sitemap: {
        name: "Sitemap",
        links: [
            { name: "Contact us", url: "/contact" },
            { name: "About us", url: "/#aboutus" },

            { name: "Feature", url: "/#features" },
            { name: "Pricing", url: "/#pricing" }
        ]
    },
    otherPages: {
        name: "Other Pages",
        links: [
            { name: "Error 404", url: "/not-found" },
            { name: "Terms & Conditions", url: "/terms-and-conditions" },
            { name: "Privacy Policy", url: "/privacy-policy" },
         
        ]
    },
    contactDetails: {
    name: "Contact Details",
    address: "123 Startup Lane, Bengaluru, India",
    email: "support@leaveflow.com",
    phone: "+91 888 888 8888"
  },
  copyright: `©${new Date().getFullYear()} LeaveFlow. All Rights Reserved`
};

export const GET = async () => {
  return NextResponse.json({
    footerData
  });
};