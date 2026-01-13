import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Smart Issue Board</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Track and manage issues efficiently"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
