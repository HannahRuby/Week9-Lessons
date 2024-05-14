SD09
🧩 Using Component Libraries and Icon Collections

🧩 Using Component Libraries and Icon Collections
Completion requirements

Component Libraries
Overview
Component libraries will speed up your ability to build complex user interfaces that are consistent and accessible.

Component libraries are often implementations of a design system: a set of consistent and reusable building blocks that can be combined in different ways to create a user interface.

There are a huge number of different options, each with their own advantages and disadvantages.

It's worth taking a look at the websites of the different options to get a feel for what's available. In this class we'll encourage Radix UI, which also gives the option of using shadcn in future (as shadcn is built on top of Radix primitives using tailwind).

High quality, widely used component libraries include, but are far from limited to:

Material UI / MUI
Chakra UI
Radix UI
shadcn/ui
Class Plan
Demo: Component libraries, setting up Radix Primitives components
Workshop: Experiment with using Radix UI in your app
Topics
Component libraries
Design systems
Radix UI
Resources
Radix UI
Radix UI Getting Started Guide
Workshop
Setup Radix Primitives
It is recommended that you use the unstyled Radix primitives and manage styling yourself (based on the examples provides in the docs), as setting up the Radix UI themes is more complicated and can lead to fighting against the opinionated styles to make them look how you want. The unstyled primitives provide all of the accessibility and functionality without any styling./

⛳️ Follow the Getting Started guide to install and set up your first Radix component.

🎯 Try out three or more of the components in the set. Some are more difficult to use than others. Good components to start with are Switch, Dialog, Popover and Tooltip. More complex but common options are Tabs, NavigationMenu and DropdownMenu

💭 Each of the components has it's own package you can install separately. For example, installing the Popover component can be done with npm install @radix-ui/popver and the Switch component can be installed with npm install @radix-ui/switch and so on.

💭 You may also require @radix-ui/react-icons for the Icon pack and @radix-ui/colors for importing the stylesheets provided in the example docs.

Use React Icons
Radix UI has an icon pack, but it may not contain everything you'd like to use.

You can use the React Icons library to add more icons to your app. While it can be preferable to use a consistent icon pack, it's not always possible to find everything you need in one place, so you can mix and match as needed.

⛳️ Install the React Icons library with npm install react-icons, and then choose your icon to get the import path to use in your components.

import { FaTwitter } from "react-icons/fa";

export function MyComponent() {
return (
<div>
Icon: <FaTwitter />
</div>
);
}
Your answer
