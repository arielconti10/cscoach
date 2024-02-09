import { SigninButton } from "./_components/SigninButton";

export default async function Signin({
  searchParams,
}: {
  searchParams: {
    redirectTo: string | null;
  };
}) {
  return (
    <div>
      <SigninButton redirectTo={searchParams.redirectTo ?? "/"} />
    </div>
  );
}
