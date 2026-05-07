export const metadata = {
  title: "One Time View App",
  description: "MongoDB One Time View Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}