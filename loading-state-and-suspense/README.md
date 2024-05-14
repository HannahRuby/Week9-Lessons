SD09
🧩 Loading states and Suspense

🧩 Loading states and Suspense
Completion requirements

Next.js Loading states and Suspense
Overview
Next.js has a built in loading state component that you can use to show a loading spinner while your page is loading.

You can also use React's Suspense component to show a loading state while a component is loading.

To illustrate this we'll make an artificially slow server component (using a setTimeout), and show the two ways of handling loading states with Next.js.

loading.jsx is a file that you can place next to a slow page.jsx (one that loads lots of data, for example), and it will show whatever content you return from that component.

Suspense is a React component you can wrap your slow component in, and provide a fallback component to render in it's place while waiting for the slow component to run on the server.

Workshop
⛳️ In your project, create a slow component. It can load some remote data, or you can use an artificial delay with a setTimeout function like this:

async function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export async function SlowComponent() {
  // slow because of a delay, or fetching lots of data over the network or from a database
  await delay(5000);

  return (
    <div>
      <p className="text-green-400">
        I&apos;m very slow to load, but here I am at last!
      </p>
    </div>
  );
}
 
🎯 Create two new page routes, one /slow and one /fast, and render the SlowComponent on them both.

🎯 In the /slow folder, create a loading.jsx file with the following code:

export default function Loading() {
  return (
    <div>
      <p className="text-green-400">Loading your slow page...</p>
    </div>
  );
}
 
🎯 In the /fast/page.jsx import <Suspense> from 'react', and wrap the SlowComponent in the Suspense component, providing a fallback prop, which can be anything from simple text, to a fully designed loading page component.

import { Suspense } from "react";
import { SlowComponent } from "../SlowComponent";

export default function FastPage() {
  return (
    <div>
      <h2>Fast page</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
 
💭 As a bonus, to show the currently active page, we can make a new component that wraps the default next/link component that can compare the current pathname of the page with the href of the link to display the active link differently. Use the  <ActiveLink href="/">Homepage</ActiveLink> component instead of <Link>

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function ActiveLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? "text-orange-400" : ""}>
      {children}
    </Link>
  );
}
 
👀 Notice how the active link is displayed when you click the link, while the Loading.jsx file or the Suspense fallback are busy loading the slow component.

💭An additional bonus: react-spinners has a set of easy to use loading spinners that you can use in your Suspense fallback or loading.jsx file. They work like this (after installing npm install react-spinners):

// loading.jsx
"use client";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Loading() {
  return (
    <div className="flex h-screen w-full justify-center pt-20">
      <PacmanLoader loading={true} color="#ffffff" />
    </div>
  );
}
Your answer












