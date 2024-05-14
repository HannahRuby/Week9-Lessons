import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <h1>Please sign up an account to do see more</h1>
      <p>There's more you can do!</p>
      <SignUp />
    </div>
  );
}
