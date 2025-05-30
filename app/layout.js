import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.sass";

export const metadata = {
  title: "INFRAPLUS",
  description: "Infraplus",
  icons: {
    icon: "/assets/icon/favicon/favicon.ico",
    shortcut: "/assets/icon/favicon/favicon.ico",
    apple: "/assets/icon/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        url: "/assets/icon/favicon/favicon-96x96.png",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/assets/icon/favicon/favicon.svg",
      },
      {
        rel: "manifest",
        url: "/assets/icon/favicon/site.webmanifest",
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
