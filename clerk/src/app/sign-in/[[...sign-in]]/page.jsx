import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <h1>Welcome to your page</h1>
      <p>Happy to have you here</p>

      <SignIn />
    </div>
  );
}
