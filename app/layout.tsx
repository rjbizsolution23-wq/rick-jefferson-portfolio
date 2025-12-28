import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rickjefferson.com'),
  title: {
    default: "Rick Jefferson - AI & Automation Expert | Credit & Financial Strategist",
    template: "%s | Rick Jefferson"
  },
  description: "Premier AI & Automation Expert and Credit Strategist. 500+ businesses automated, $50M+ generated. AWS Certified Solutions Architect. Technology innovation meets financial empowerment.",
  keywords: [
    "Rick Jefferson",
    "AI automation",
    "machine learning",
    "credit repair",
    "business credit",
    "financial literacy",
    "AWS Solutions Architect",
    "enterprise automation",
    "credit strategist",
    "Rick Jefferson Solutions",
    "NeuronEdge Labs",
    "Supreme Credit Master AGI"
  ],
  authors: [{ name: "Rick Jefferson", url: "https://rickjefferson.com" }],
  creator: "Rick Jefferson",
  publisher: "Rick Jefferson Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rickjefferson.com",
    siteName: "Rick Jefferson",
    title: "Rick Jefferson - AI & Automation Expert | Credit & Financial Strategist",
    description: "Premier AI & Automation Expert and Credit Strategist. 500+ businesses automated, $50M+ generated.",
    images: [
      {
        url: "https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg",
        width: 1200,
        height: 630,
        alt: "Rick Jefferson Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@ricksolutions1",
    creator: "@ricksolutions1",
    title: "Rick Jefferson - AI & Automation Expert | Credit & Financial Strategist",
    description: "Premier AI & Automation Expert and Credit Strategist. 500+ businesses automated, $50M+ generated.",
    images: ["https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://rickjefferson.com/#person",
              "name": "Rick Jefferson",
              "alternateName": ["Ricky Jefferson", "Rick J"],
              "url": "https://rickjefferson.com",
              "image": "https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg",
              "sameAs": [
                "https://www.linkedin.com/in/rick-jefferson-314998235",
                "https://www.instagram.com/rickjeffsolutions/",
                "https://www.tiktok.com/@rick_jeff_solution",
                "https://twitter.com/ricksolutions1",
                "https://www.facebook.com/ricky.lovingtoninpooter/",
                "https://github.com/rickjeffsolutions"
              ],
              "jobTitle": [
                "AI & Automation Architect",
                "AWS Certified Solutions Architect",
                "Credit Strategist",
                "Financial Technology Expert"
              ],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Rick Jefferson Solutions",
                  "url": "https://rickjeffersonsolutions.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "5 Cowboys Way, Ste 300",
                    "addressLocality": "Frisco",
                    "addressRegion": "TX",
                    "postalCode": "75034",
                    "addressCountry": "US"
                  }
                },
                {
                  "@type": "Organization",
                  "name": "NeuronEdge Labs",
                  "url": "https://rickjeffersonsolutions.com"
                }
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Cloud Computing",
                "AWS",
                "Python",
                "TensorFlow",
                "PyTorch",
                "Kubernetes",
                "Docker",
                "Credit Repair",
                "Business Credit",
                "Financial Literacy",
                "FCRA Compliance",
                "Credit Automation",
                "Business Funding"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "AWS Certified Solutions Architect Professional",
                  "credentialCategory": "certification"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Certified Credit Consultant (CCC)",
                  "credentialCategory": "certification"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Certified Credit Repair Specialist (CCRS)",
                  "credentialCategory": "certification"
                }
              ],
              "description": "Premier AI & Automation Expert and Credit Strategist with 500+ automated business implementations generating $50M+ in revenue. AWS Certified Solutions Architect specializing in enterprise AI, cloud infrastructure, and financial technology solutions.",
              "email": "info@rickjeffersonsolutions.com",
              "telephone": "+1-866-752-4618"
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
